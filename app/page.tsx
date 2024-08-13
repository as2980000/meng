
import { Heading1 } from "lucide-react";
import Image from "next/image";
import { Fragment } from "react";
import { Button } from "@/components/ui/button"


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CarouselSize } from "./test";
import Tee from "../pages/pee";


import { createClient } from "@libsql/client";

export const turso = createClient({
  url: "libsql://jp-actor-meng.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJleHAiOjE3MjQwMjU2MDIsImlhdCI6MTcyMzQ2ODE0MSwiaWQiOiI2YjFkMmE1MC1hYTkzLTRlODUtOWIzNC1jOGI1ODJmMmRhZGMifQ.Wu2pegQbyEDexfVGX0d_wGFHSgyc7kmUgUWe5DeldtTF0DIHlHWCntx4OccBWejJsPoVhyNzrUOGp-ocNzIrAw",
});

export const turso2 = createClient({
  url: process.env.TURSO_DATABASE_URL?process.env.TURSO_DATABASE_URL:"libsql://jp-actor-meng.turso.io",
  authToken: process.env.TURSO_AUTH_TOKEN,
});

async function testDb(){

console.log(process.env.TURSO_DATABASE_URL);

 const ac=await turso.execute(" SELECT * FROM actors");

 //var n=ac.rows[0]["ch_name"]
 //console.log(n)
 console.log(ac);

 console.log(ac.rows)
 return ac.rows;
}

export   default function Home() {

 const rows= testDb();

 

  return (
    <div>

    <h1></h1>
    <CarouselSize></CarouselSize>


    </div>
  );
}
