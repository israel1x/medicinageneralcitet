import React, { Component } from "react";
import { PanelMenu } from "primereact/panelmenu";

class PanelMenuMed extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          label: "Luis Tipan",
          icon: "pi pi-fw pi-file",
          items: [
            {
              label: "Reportes",
              icon: "pi pi-fw pi-plus",
              items: [
                {
                  label: "Bookmark",
                  icon: "pi pi-fw pi-bookmark"
                },
                {
                  label: "Video",
                  icon: "pi pi-fw pi-video"
                }
              ]
            }
          ]
        },
        {
          label: "Pagina Principal",
          /* icon: "pi pi-fw pi-pencil", */
          items: [
            {
              label: "Left",
              icon: "pi pi-fw pi-align-left"
            },
            {
              label: "Right",
              icon: "pi pi-fw pi-align-right"
            },
            {
              label: "Center",
              icon: "pi pi-fw pi-align-center"
            },
            {
              label: "Justify",
              icon: "pi pi-fw pi-align-justify"
            }
          ]
        },
        {
          label: "Pacientes",
          icon: "pi pi-fw pi-user",
          items: [
            {
              label: "Ingreso",
              icon: "pi pi-fw pi-user-plus"
            },
            {
              label: "Consulta",
              icon: "pi pi-fw pi-user-minus"
            },
            {
              label: "Search",
              icon: "pi pi-fw pi-users",
              items: [
                {
                  label: "Filter",
                  icon: "pi pi-fw pi-filter",
                  items: [
                    {
                      label: "Print",
                      icon: "pi pi-fw pi-print"
                    }
                  ]
                },
                {
                  icon: "pi pi-fw pi-bars",
                  label: "List"
                }
              ]
            }
          ]
        },
        {
          label: "Citas Medicas",
          icon: "pi pi-fw pi-calendar",
          items: [
            {
              label: "Edit",
              icon: "pi pi-fw pi-pencil",
              items: [
                {
                  label: "Save",
                  icon: "pi pi-fw pi-calendar-plus"
                },
                {
                  label: "Delete",
                  icon: "pi pi-fw pi-calendar-minus"
                }
              ]
            },
            {
              label: "Archieve",
              icon: "pi pi-fw pi-calendar-times",
              items: [
                {
                  label: "Remove",
                  icon: "pi pi-fw pi-calendar-minus"
                }
              ]
            }
          ]
        },
        {
          label: "Cerrar Sesión",
          icon: "pi pi-fw pi-calendar"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <div className="content-section introduction">
          <div className="feature-intro">
            {/* <h1>PanelMenu</h1>
            <p>PanelMenu is a hybrid of accordion-tree components.</p> */}
          </div>
        </div>

        <div className="content-section implementation">
          <PanelMenu model={this.state.items} style={{ width: "300px" }} />
        </div>
      </div>
    );
  }
}

export default PanelMenuMed;
