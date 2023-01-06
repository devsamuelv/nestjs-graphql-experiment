import { Injectable, NestMiddleware } from '@nestjs/common';
import { FieldMiddleware, MiddlewareContext, NextFn } from '@nestjs/graphql';
import { AuthenticationError } from 'apollo-server-express';
import { Request } from 'express';

export const AuthorsMiddleware: FieldMiddleware = async (
  ctx: MiddlewareContext,
  next: NextFn,
) => {
  const headers: NodeJS.Dict<string | string[]> = ctx.context.req.headers;
  const token = headers["token"];

  if (token == null) {
    return 0;
  }

  return await next();
};