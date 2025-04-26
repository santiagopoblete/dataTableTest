"use server"

import { Animal, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(fishName: string): Promise<Animal[]> {
    const res = await fetch('https://api.api-ninjas.com/v1/animals?name=' + fishName, {
        method: 'GET',
        headers: {
            'X-Api-Key': process.env.ANIMALS_KEY ?? '',
        },
        cache: 'no-store', // Para asegurarte de que no cachea la respuesta
    });

    if (!res.ok) {
        return []
    }

    const data = await res.json();

    return data;
}

async function DemoPage() {
    const clownData = await getData("clownfish");
    const dolphinData = await getData("dolphin");
    const sharkData = await getData("shark");
    const whaleData = await getData("whale");

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold text-center mb-5">Animals</h1>
            <DataTable columns={columns} data={clownData} />
            <DataTable columns={columns} data={dolphinData} />
            <DataTable columns={columns} data={sharkData} />
            <DataTable columns={columns} data={whaleData} />
        </div>
  )
}

export default DemoPage;
