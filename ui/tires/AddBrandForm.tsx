"use client";
import { createTireBrand } from "@/actions/TiresAction";
import Alert from "@/components/Alert";
import Button from "@/components/Button";
import { useState } from "react";

export default function AddBrandForm({ onSuccess }: { onSuccess?: () => void }) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "danger";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setLoading(true);
    setMessage(null);

    const result = await createTireBrand(name.trim());

    if (result.success) {
      setMessage({ type: "success", text: "เพิ่มยี่ห้อยางเรียบร้อยแล้ว" });
      setName("");
      if (onSuccess) {
        setTimeout(onSuccess, 1000);
      }
    } else {
      setMessage({
        type: "danger",
        text: result.error || "เกิดข้อผิดพลาดในการบันทึก",
      });
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {message && (
        <Alert variant={message.type} className="mb-4">
          {message.text}
        </Alert>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          ชื่อยี่ห้อยาง
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="ระบุชื่อยี่ห้อ (เช่น Bridgestone, Michelin)"
          required
        />
      </div>

      <div className="flex justify-end pt-2">
        <Button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 px-6"
        >
          {loading ? "กำลังบันทึก..." : "บันทึกยี่ห้อยาง"}
        </Button>
      </div>
    </form>
  );
}
