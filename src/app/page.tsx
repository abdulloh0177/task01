import MainComponent from "@/components/main-component";
import MainLayout from "@/layouts/main-layout";
import Image from "next/image";


export default function Home() {
  return (
    <MainLayout>
      <div>
        <MainComponent/>
      </div>
    </MainLayout>
  );
}
