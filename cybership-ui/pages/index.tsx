// pages/index.tsx
import React from "react";
import "../globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Layout from "@/components/layout";
import CallMadeIcon from "@mui/icons-material/CallMade";

const HomePage = () => {
  return (
    <Layout>
      <div className="mt-[200px]">
        <div className="text-center">
          <Link href="/orders">
            <Button variant="link">
              see order statuses
              <CallMadeIcon />
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
