"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schoolSchema, type SchoolInput } from "@/lib/validators";
import { useState } from "react";
import { Input, Textarea, Button, Select } from "./Ui";

export default function SchoolForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SchoolInput>({
    resolver: zodResolver(schoolSchema),
    defaultValues: { image: "" },
  });
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  function onFileChange(f?: File) {
    if (!f) return;
    setFile(f);
    const url = URL.createObjectURL(f);
    setPreview(url);
  }

  async function onSubmit(values: SchoolInput) {
    let imagePath = values.image;
    console.log("submitting form");
    if (file) {
      const form = new FormData();
      form.set("file", file);
      const res = await fetch("/api/schools/upload", {
        method: "POST",
        body: form,
      });
      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();
      imagePath = data.path;
    }
    const payload = { ...values, image: imagePath };
    const res = await fetch("/api/schools", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errText = await res.text();
      alert("Save failed: " + errText);
      return;
    }
    reset();
    setFile(null);
    setPreview(null);
    alert("School saved!");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 card p-6">
      <div className="grid gap-2">
        <label className="font-medium">School Name</label>
        <Input
          placeholder="Springfield High"
          {...register("name")}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <label className="font-medium">Address</label>
        <Textarea
          rows={3}
          placeholder="123, Elm Street"
          {...register("address")}
          aria-invalid={!!errors.address}
        />
        {errors.address && (
          <p className="text-sm text-red-600">{errors.address.message}</p>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="font-medium">City</label>
          <Input
            placeholder="Indore"
            {...register("city")}
            aria-invalid={!!errors.city}
          />
          {errors.city && (
            <p className="text-sm text-red-600">{errors.city.message}</p>
          )}
        </div>
        <div>
          <label className="font-medium">State</label>
          <Input
            placeholder="Madhya Pradesh"
            {...register("state")}
            aria-invalid={!!errors.state}
          />
          {errors.state && (
            <p className="text-sm text-red-600">{errors.state.message}</p>
          )}
        </div>
        <div>
          <label className="font-medium">Contact</label>
          <Input
            placeholder="+91 98765 43210"
            {...register("contact")}
            aria-invalid={!!errors.contact}
          />
          {errors.contact && (
            <p className="text-sm text-red-600">{errors.contact.message}</p>
          )}
        </div>
      </div>
      <div className="grid gap-2">
        <label className="font-medium">Email</label>
        <Input
          type="email"
          placeholder="info@school.edu"
          {...register("email_id")}
          aria-invalid={!!errors.email_id}
        />
        {errors.email_id && (
          <p className="text-sm text-red-600">{errors.email_id.message}</p>
        )}
      </div>

      <div className="grid gap-2">
        <label className="font-medium">School Image</label>
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const f = e.dataTransfer.files?.[0];
            if (f) onFileChange(f);
          }}
          className="rounded-2xl border-2 border-dashed p-6 text-center cursor-pointer"
          onClick={() => {
            const input = document.getElementById("file") as HTMLInputElement;
            input?.click();
          }}
        >
          {preview ? (
            <img
              src={preview}
              alt="preview"
              className="mx-auto h-40 object-cover rounded-xl"
            />
          ) : (
            <p className="text-sm text-gray-600">
              Drag & drop or click to upload
            </p>
          )}
        </div>
        <input
          id="file"
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => onFileChange(e.target.files?.[0] || undefined)}
        />
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : "Save School"}
      </Button>
    </form>
  );
}
