import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Middleware } from '../types/middleware.interface.js';
import { HttpError } from '../errors/index.js';
import { ObjectSchema } from 'joi';

export class SchemaValidatorMiddleware implements Middleware {
  constructor(private schema: ObjectSchema) {}

  public async handleAsync(req: Request, _res: Response, next: NextFunction): Promise<void> {
    try {
      req.body = await this.schema.validateAsync(req.body, {
        context: { isEditForm: req.method === 'POST' }
      });

      return next();
    } catch (error: unknown) {
      throw new HttpError(
        StatusCodes.BAD_REQUEST,
        'Body does not match the scheme'
      );
    }
  }
}
