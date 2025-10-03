export default (defaultLimit = 10, maxLimit = 50) =>
  (req: any, res: any, next: any) => {
    let { page = 1, limit = defaultLimit, filter = '' } = req?.query ?? (req?.params || {});

    page = Math.max(parseInt(page.toString(), 10), 1);
    limit = Math.min(Math.max(parseInt(limit.toString(), 10), 1), maxLimit);

    req.options = {
      page,
      limit,
      skip: (page - 1) * limit,
      filter: filter ? JSON.parse(filter.toString()) : {},
    };

    next();
  };
