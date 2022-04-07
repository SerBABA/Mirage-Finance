import { Layout } from 'components/Layout';
import { GridLayout } from 'components/Grid';
import { SpendingChart } from 'components/spendingChart';
import { DashboardItem } from 'components/DashboardItem';

export const Home = () => (
  <Layout>
    <GridLayout>
      <DashboardItem gridRow="1 / 2" gridCol="1 / 2">
        First Item
      </DashboardItem>
      <DashboardItem gridRow="2 / 3" gridCol="1 / 2">
        <SpendingChart />
      </DashboardItem>
    </GridLayout>
  </Layout>
);
