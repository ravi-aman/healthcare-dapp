import React from "react";

//INTERNAL IMPORT
import TableHead from "../../Regular/Table/TableHead";
import TableList from "./TableList";

const Table = ({
  thead,
  name,
  tableData,
  setOpenComponent,
  setPatientDetails,
}) => {
  return (
    <table
      id="example5"
      className="table table-striped patient-list mb-4 dataTablesCard fs-14"
    >
      <TableHead thead={thead} name={name} />
      <tbody>
        {tableData?.map((patient, index) => (
          <TableList
            patient={patient}
            index={index}
            setOpenComponent={setOpenComponent}
            setPatientDetails={setPatientDetails}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;