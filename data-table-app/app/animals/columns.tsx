"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Taxonomy = {
    kingdom: string
    family: string
    genus: string
}

export type Characteristics = {
    habitat: string
    color: string
    lifespan: string
}

export type Animal = {
    name: string
    taxonomy: Taxonomy
    locations: string[]
    characteristics: Characteristics

}

export const columns: ColumnDef<Animal>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "taxonomy.kingdom",
    header: "Kingdom",
  },
  {
    accessorKey: "taxonomy.family",
    header: "Family",
  },
  {
    accessorKey: "taxonomy.genus",
    header: "Genus",
  },
  {
    accessorKey: "locations",
    header: "Locations",
  },
  {
    accessorKey: "characteristics.habitat",
    header: "Habitat",
  },
  {
    accessorKey: "characteristics.color",
    header: "Color",
  },
  {
    accessorKey: "characteristics.lifespan",
    header: "Lifespan",
  },
];