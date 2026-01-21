import Link from "next/link";
import { branchCategories } from "@/lib/data/branches";

export default function BranchCategories() {
  return (
    <section className="bg-gs-yellow py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-8">
          {branchCategories.map((category) => (
            <div key={category.title} className="animate-fadeIn">
              <h3 className="text-xl md:text-2xl font-bold text-gs-black mb-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {category.branches.map((branch) => (
                  <Link
                    key={branch.name}
                    href={branch.href}
                    className="group flex items-center justify-between bg-white/50 hover:bg-white px-4 py-3 rounded-md transition-all duration-200 hover:shadow-md"
                  >
                    <span className="text-sm md:text-base text-gray-800 group-hover:text-gs-black font-medium">
                      {branch.name}
                    </span>
                    <span className="text-gray-500 group-hover:text-gs-black group-hover:translate-x-1 transition-transform">
                      &gt;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
