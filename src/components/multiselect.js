import React, { useState } from "react";
import Select from "react-select";
import { getOutlines } from "../connection";
import { useAccount } from "../context/account-context";

function MultiSelect() {
  debugger;
  const [options, setOptions] = useState({ label: "", value: "" });
  const [selectedOption, setSelectedOption] = useState(null);

  const accountContext = useAccount();
  const user = accountContext.account.user;

  async function getOptions() {
    const results = await getOutlines(user);
    const newOptions = results.map((x) => ({
      label: x.Title,
      value: x.Title,
    }));
    setOptions(newOptions);
    return newOptions
  }

  return (
    <Select
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={getOptions}
      isSearchable
      isMulti
    />
  );
}

export default MultiSelect;
