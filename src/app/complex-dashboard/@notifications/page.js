import Card from "@/components/card";
import Link from "next/link";
import React from "react";

export default function Notifications() {
  return (
    <>
      <Card>
        Notifications <Link href="/complex-dashboard/archived">Archived</Link>
      </Card>
    </>
  );
}
