import React from "react";
import { FixedSizeList as List } from "react-window";

export default function ListVirtualization() {
  const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);
  return (
    <>
      <h1>List Virtualization</h1>
      <List height={400} itemCount={items.length} itemSize={35} width="100%">
        {({ index, style }) => {
          console.log(`Rendering item: ${items[index]}`);
          return <div style={style}>{items[index]}</div>;
        }}
      </List>

      {/* when not using virtualization */}
      {/* <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
    </>
  );
}
