import Card from "@/components/card";
import Link from "next/link";
import React from "react";

export default function ArchivedNotificattion() {
  return (
    <Card>
      <div>Archived Notifications</div>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
}
