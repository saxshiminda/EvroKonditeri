import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { prisma } from '../lib/prisma.js';

interface CustomerJwtPayload {
  customerId: string;
  email: string;
}

async function attachCustomerFromToken(req: Request, token: string): Promise<boolean> {
  try {
    const payload = jwt.verify(token, env.customerJwtSecret) as CustomerJwtPayload;
    const customer = await prisma.customer.findUnique({
      where: { id: payload.customerId },
      select: { id: true, email: true },
    });
    if (!customer) return false;
    req.customerId = customer.id;
    req.customerEmail = customer.email;
    return true;
  } catch {
    return false;
  }
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      customerId?: string;
      customerEmail?: string;
    }
  }
}

/** Attaches customer identity if a valid customer JWT is present; never blocks. */
export async function optionalCustomerAuth(
  req: Request,
  _res: Response,
  next: NextFunction
): Promise<void> {
  const header = req.headers['authorization'];
  const token = header?.startsWith('Bearer ') ? header.slice(7) : undefined;

  if (token) {
    await attachCustomerFromToken(req, token);
  }

  next();
}

/** Blocks requests without a valid customer JWT. */
export async function requireCustomerAuth(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const header = req.headers['authorization'];
  const token = header?.startsWith('Bearer ') ? header.slice(7) : undefined;

  if (!token) {
    res.status(401).json({ error: 'Authentication required' });
    return;
  }

  const ok = await attachCustomerFromToken(req, token);
  if (!ok) {
    res.status(401).json({ error: 'Invalid or expired token' });
    return;
  }

  next();
}
