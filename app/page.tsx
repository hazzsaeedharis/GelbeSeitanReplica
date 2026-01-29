import SearchForm from "@/components/sections/SearchForm";
import AwardsSection from "@/components/sections/AwardsSection";
import BranchCategories from "@/components/sections/BranchCategories";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SearchForm />
      <AwardsSection />
      <BranchCategories />
    </main>
  );
}
