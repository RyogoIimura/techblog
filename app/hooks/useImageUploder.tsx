import { supabase } from "@/app/utils/supabase";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function useImageUploder() {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.match("image.*")) {
      await handleUpload(selectedFile); // ファイルが選択された後にアップロードを開始
    } else {
      setError("画像ファイルを選択してください");
    }
  };

  const handleUpload = async (file: File) => {
    setUploading(true);
    setError(null);
    try {
      // ファイルをアップロードする処理
      const fileExtention = file.name.split(".").pop();
      const fileName = `${uuidv4()}.${fileExtention}`;
      const { error: uploadError } = await supabase.storage
        .from("public-image-bucket")
        .upload(`img/${fileName}`, file);
      if (uploadError) throw uploadError;
      console.log("Uploaded successful:", fileName);
    } catch (error) {
      if (error instanceof Error) {
        setError(`Upload failed: ${error.message}`);
      }
    } finally {
      setUploading(false);
    }
  };

  return { uploading, error, handleFileChange, handleUpload };
}

export default useImageUploder;
