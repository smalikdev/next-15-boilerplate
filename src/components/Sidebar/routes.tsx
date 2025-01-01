import { faChartLine, faChartPie } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { LiaUserMinusSolid } from "react-icons/lia"
import { LuClipboardMinus } from "react-icons/lu"
import { MdOutlineAddHome } from "react-icons/md"
import { TiClipboard } from "react-icons/ti"

export const routes = [
  {
    href: "/ticket",
    name: "Tickets",
    icon: (
      <img
        src="/images/operation.svg"
        alt="dashboard"
        width={25}
        height={25}
        className="h-5 w-5 transition-all duration-200 group-hover:h-6 group-hover:w-6"
      />
    ),
  },
]

export async function getRoutes(session: any) {
  // "use server"
  const { user } = session
   const list: any = []

  routes.forEach((item: any) => {
    if (user?.roleIds.includes("46")) {
      // Admin role gets access to all routes
      list.push(item)
    } else if (user?.roleIds.includes("83") && (item.href === "/dashboard" || item.href === "/product_management")) {
      // Product role gets access to Dashboard and Product Management
      list.push(item)
    } else if (user?.roleIds.includes("49") && (item.href === "/dashboard" || item.href === "/operation_management")) {
      // Operation role gets access to Dashboard and Operation Management
      list.push(item)
    } else if (user?.roleIds.includes("87") && item.href === "/dashboard") {
      // Operation role gets access to Dashboard and Operation Management
      list.push(item)
    } else if (user?.roleIds.includes("103") && (item.href === "/dashboard" || item.href === "/report")) {
      // Reports role gets access to Dashboard and Reports
      list.push(item)
    } else if (user?.roleIds.includes("104") && (item.href === "/dashboard" || item.href === "/customer_onboarding")) {
      // Sales Agent role gets access to Dashboard and customer_onboarding
      list.push(item)
    }
    list.push(item)
    // Handle children routes
    // if (item.children) {
    //   const childlist = item.children.reduce((acc: any, child: any) => {
    //     const foundChild = user?.role?.Permission.find((p: any) => p.module.path === child.href);
    //     if (foundChild && foundChild.read) {
    //       if (user?.role?.name === 'admin' ||
    //         (user?.role?.name === 'product' && (child.href.includes('/dashboard') || child.href.includes('/product_management'))) ||
    //         (user?.role?.name === 'operation' && (child.href.includes('/dashboard') || child.href.includes('/operation_management')))) {
    //         acc.push(child);
    //       }
    //     }
    //     return acc;
    //   }, []);

    //   if (childlist.length > 0) {
    //     list.push({ ...item, children: childlist });
    //   }
    // }
  })

  return list
}
