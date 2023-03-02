/**
 * import react packages
 */
import { ComponentType, ReactElement, ReactNode } from 'react';

/**
 * import next packages
 */
import { NextPage } from 'next';

export type PageProps<P = {}> = NextPage<P> & {
  children: React.ReactNode,
  getLayout?: (page: ReactElement) => ReactNode,
  layout?: ComponentType,
}
