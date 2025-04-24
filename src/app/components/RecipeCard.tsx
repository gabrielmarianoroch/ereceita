'use client'
import Link from 'next/link';
import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface RecipeCardProps {
  title: string;
  image: string;
  slug: string;
  time: string;
}

export default function RecipeCard({ title, image, slug, time }: RecipeCardProps) {
  return (
    <Link href={`/receitas/${slug}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-red-600">{title}</h3>
          <p className="text-sm text-gray-600"> {time}</p>
          <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
        </div>
      </div>
    </Link>
  );
}