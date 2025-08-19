import { Link } from "react-router-dom";

/* eslint-disable no-unused-vars */
export function itemRender(_current: number, type: string, originalElement: React.ReactNode) {
  if (type === "prev") {
    return <Link to="#">Previous</Link>;
  }
  if (type === "next") {
    return <Link to="#">Next</Link>;
  }
  return originalElement;
}

export function onShowSizeChange(_current: number, _pageSize: number) {}
