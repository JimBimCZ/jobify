import { FaChartArea } from "react-icons/fa";
import { IoLayers } from "react-icons/io5";
import { TbAppWindowFilled } from "react-icons/tb";

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const links: NavLink[] = [
  {
    href: "/add-job",
    label: "add job",
    icon: <IoLayers />,
  },
  {
    href: "/jobs",
    label: "jobs",
    icon: <TbAppWindowFilled />,
  },
  {
    href: "/stats",
    label: "stats",
    icon: <FaChartArea />,
  },
];

export default links;
