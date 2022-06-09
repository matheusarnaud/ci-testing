export type PaginatedResponse<Result> = {
  results: Result[]
  next?: number
}
