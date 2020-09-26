import React, { Fragment, useState } from "react";
import { getOutlines } from "../connection";
import { useAccount } from "../context/account-context";

function OutlineBuilder() {
  const [title, setTitle] = usestate("");
  const [body, setBody] = useState("");
  const accountContext = useAccount();

  async function getData() {
    const user = accountContext.account.user;
    const outlineData = await getOutlines(user);
    setTitle(outlineData.Title);
    setBody(outlineData.Body);
    return outlineData;
  }

  return (
    <div>
      {getData.map((item) => {
        if (item) {
          <Fragment key={item._id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </Fragment>;
        } else {
          return <h1>Nothing to Show</h1>;
        }
      })}
    </div>
  );
}

export default OutlineBuilder;
