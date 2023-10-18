import React from "react";
import Display from "./components/Display";
import Navbar from "./components/Navbar";
import { useDispatch} from "react-redux";
import { fetchData } from "../src/main";
import { useEffect } from "react";
import "./App.css";

export default function App(){
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return(
    <div>
      <Navbar />
      <Display/>
    </div>
  );
};

