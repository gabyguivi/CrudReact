import React from "react";
import MaterialTable from "material-table";

const Article = ({ parametros, onChange }) => {
  const columns = [
    { title: "Id", field: "Id", editable: "never" },
    { title: "Title", field: "Title" },
    { title: "Price", field: "Price" }
  ];

  return (
    <MaterialTable
      title="Articles"
      columns={columns}
      data={parametros}
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              onChange(newData, oldData);
            }, 0);
          })
      }}
      localization={{
        pagination: {
          labelDisplayedRows: "{from}-{to} de {count}",
          labelRowsSelect: "Filas",
          firstAriaLabel: "Primera página",
          firstTooltip: "Primera página",
          previousAriaLabel: "Página previa",
          previousTooltip: "Página previa",
          nextAriaLabel: "Próxima página",
          nextTooltip: "Próxima página",
          lastAriaLabel: "Última página",
          lastTooltip: "Última página"
        },
        toolbar: {
          nRowsSelected: "{0} fila(s) seleccionadas",
          searchTooltip: "Buscar",
          searchPlaceholder: "Buscar"
        },
        header: {
          actions: "Acciones"
        },
        body: {
          emptyDataSourceMessage: "No se encontraron artículos para ese filtro",
          filterRow: {
            filterTooltip: "Filtrar"
          },
          editRow: {
            cancelTooltip: "Cancelar",
            saveTooltip: "Guardar"
          }
        }
      }}
    />
  );
};

export default Article;
