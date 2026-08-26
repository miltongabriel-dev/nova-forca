import { GraduationCap } from "lucide-react";
import { SectionHeader } from "@/components/nav/section-header";
import { GrowthTabs } from "@/components/growth/growth-tabs";
import { values, valuesAverage, currentUser, graduationHistory } from "@/lib/mock-data";

export default function GrowthPage() {
  return (
    <>
      <SectionHeader
        title="Growth"
        subtitle="Progress that goes beyond the belt."
        icon={GraduationCap}
      />
      <main className="mx-auto max-w-lg px-4 py-5">
        <GrowthTabs
          values={values}
          average={valuesAverage}
          currentRank={currentUser.beltRank}
          currentDegree={currentUser.beltDegree}
          history={graduationHistory}
        />
      </main>
    </>
  );
}
