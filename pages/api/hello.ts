// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import container from "@/container"
import { TYPES } from '@/types'
import { ApiService } from '@/interfaces'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const apiService = container.MyContainer.get<ApiService>(TYPES.ApiService)

  const result = await apiService.fetchData()

  res.status(200).json({ name: result })
}
