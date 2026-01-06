"use client";
import Layout from "@/app/componen/ui/Layout";
import { Button, TextField } from "@mui/material";

export default function Page() {
    return <Layout>
        <h1 className='text-2xl font-bold text-black'> Create Product Category </h1>
        <form>
            <div className="grid grid-cols-4 gap-4 my-4">
                <TextField name="name" id="name" label="Name" variant="standard" />
                <TextField 
                name="description"
                id="description"
                label="Description"
                variant="standard"
                />
            </div>
        <Button variant="contained" color="primary">Create</Button>
        </form>
    </Layout>
}