import 'express';

declare module 'express-serve-static-core' {
  interface Request {
    options?: {
      page: number;
      limit: number;
      skip: number;
      filter: Record<string, any>;
    };
  }
}
