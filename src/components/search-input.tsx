"use client";
import { TextField, InputAdornment } from "@mui/material";
import { Search, InsertPhotoOutlined } from "@mui/icons-material";
import { SearchInputProps } from "@/typings/utilis";
export default function SearchInput(props: SearchInputProps) {
  const { size = "medium" } = props;
  return (
    <TextField
      placeholder="Product search"
      fullWidth
      size={size}
      className="bg-gray-100 rounded-lg"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <Search className="text-gray-400" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <InsertPhotoOutlined className="text-gray-400" />
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
