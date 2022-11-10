import PhotoCamera from "@mui/icons-material/PhotoCamera";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import React from "react";

function SearchScan() {
  return (
    <Paper
      elevation={4}
      className="flex items-center justify-between px-2 align-middle mr-5 md:mr-0 md:w-1/2 lg:w-1/4"
    >
      <input
        className="appearance-none block w-5/6 text-sm input leading-tight focus:outline-none focus:bg-white focus:border-red-600 border-none"
        placeholder="Busca el código de la orden"
      />
      <IconButton
        variant=""
        type="button"
        color="error"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <Divider
        className="lg:hidden"
        sx={{ height: 28, m: 0.5 }}
        orientation="vertical"
      />
      <div className="lg:hidden">
        <IconButton
          color="error"
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <PhotoCamera />
        </IconButton>
      </div>
    </Paper>
  );
}

export default SearchScan;
