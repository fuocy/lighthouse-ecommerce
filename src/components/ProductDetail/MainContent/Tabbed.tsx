import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SizeGuide from "./SizeGuide";
import Specifications from "./Specifications";
import Product from "src/model/Product";

interface AppProps {
  singleProduct: Product;
}
export default function Tabbed({ singleProduct }: AppProps) {
  return (
    <Tabs
      className="text-base"
      defaultIndex={1}
      selectedTabClassName="bg-[#fff] text-black font-semibold border-b-4 border-primary-color -translate-y-[16%] transition duration-300"
    >
      <TabList className="flex gap-[10px] text-gray-400">
        <Tab className="flex-1 h-12 cursor-pointer flex items-center justify-center">
          Comments (950)
        </Tab>
        <Tab className="flex-1 cursor-pointer flex items-center justify-center">
          Size guide
        </Tab>
        <Tab className="flex-1 cursor-pointer flex items-center justify-center ">
          Specifications
        </Tab>
      </TabList>
      <TabPanel className="bg-white ">
        <h2>Some random comments</h2>
        <ul>
          {singleProduct.comment.map((comment) => (
            <li key={comment}>{comment}</li>
          ))}
        </ul>
      </TabPanel>
      <TabPanel className="bg-white pb-5">
        <SizeGuide />
        <Specifications singleProduct={singleProduct} />
      </TabPanel>
      <TabPanel className="bg-white ">
        <h2>{singleProduct.specification}</h2>
      </TabPanel>
    </Tabs>
  );
}
