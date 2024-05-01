// import { Link } from "react-router-dom";

import { LuChevronRight } from "react-icons/lu";
import { cn } from "../../utils/cn-merge";
import { toAlphaNumber } from "../../utils/format-number";
import BestSellingProductCard from "../../components/dbCards/BestSellingProductCard";
import BreadcrumbAdmin from "../../components/dbCards/BreadcrumbAdmin";
import OrderDataTable from "../../components/dbCards/OrderDataTable";

import { orderRows } from "../../helpers/page";
import { categoriesData, dishesData } from "../../assets/data/dishes.js";
import { analyticsOverviewData } from "../../assets/data/other.js";

const Dashboard = () => {
  const columns = [
    {
      key: "id",
      name: "Order ID",
    },
    {
      key: "dish_id",
      name: "Dish",
    },
    {
      key: "amount",
      name: "Total",
    },
  ];

  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Dashboard" subtitle="Admin" />
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-6">
          {analyticsOverviewData.map((overview, idx) => {
            const changeColor =
              overview.change.split(" ")[1] === "Increase"
                ? "text-green-500"
                : "text-red-500";
            return (
              <div
                key={overview.name + idx}
                className="flex flex-col justify-between overflow-hidden rounded-lg border border-default-200 p-4 text-center transition-all duration-300 hover:border-customOrange"
              >
                <h4 className="mb-2 text-2xl font-semibold text-customOrange">
                  {toAlphaNumber(overview.amount)}
                </h4>
                <h6 className="mb-4 text-lg font-medium text-default-950">
                  {overview.name}
                </h6>
                <p className={cn("text-sm font-medium", changeColor)}>
                  {overview.change}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 2xl:grid-cols-2">
          <div className="pb-10">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 ">
                <h3 className="text-xl font-semibold text-default-950">
                  Category
                </h3>
                <a
                  href="/dishes"
                  className="inline-flex items-center gap-1 text-sm font-medium text-customOrange hover:border-customOrange"
                >
                  View all <LuChevronRight size={20} />
                </a>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                {categoriesData.slice(0, 4).map((category) => (
                  <a
                    key={category.id}
                    href="/dishes"
                    className="space-y-4 rounded-lg border border-default-200 py-4 text-center transition-colors duration-300 hover:border-customOrange"
                  >
                    <div>
                      <img
                        src={category.image}
                        width={56}
                        height={56}
                        className="mx-auto h-full max-w-full "
                        alt="tea"
                      />
                    </div>
                    <h5 className="text-lg text-default-600">
                      {category.name}
                    </h5>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-10 ">
              <div className="mb-10 flex flex-wrap items-center justify-between gap-4 ">
                <h3 className="text-xl font-semibold text-default-950  ">
                  Best Selling Products
                </h3>
                <a
                  href="/dishes"
                  className="inline-flex items-center gap-1 text-sm font-medium text-customOrange hover:border-customOrange"
                >
                  View all <LuChevronRight size={20} />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
                {dishesData
                  .filter((dish) => dish.is_popular)
                  .slice(0, 3)
                  .map((dish) => (
                    <BestSellingProductCard key={dish.id} product={dish} />
                  ))}
              </div>
            </div>
          </div>

          <div className="pb-10 ">
            <OrderDataTable
              columns={columns}
              rows={orderRows.slice(0, 6)}
              title="Recent Orders"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
