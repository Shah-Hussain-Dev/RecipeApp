import "../index.css";
import { useState } from "react";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
  },
}));

const RecipeList = (props) => {
  // console.log(props.data);
  const classes = useStyles();
  // const { label, image, ingredients, url } = props.data;
  const { data } = props;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {data.map((item, index) => {
        return (
          <>
            <div class="card-container  shadow-box flex-wrap   text-center bg-light  my-4 ">
              <div
                class="card-group justify-content-center"
                style={{ width: "360px" }}
              >
                <div class="card  ">
                  <div>
                    <img
                      class="card-img-top img-fluid"
                      src={item.recipe.image}
                      alt="Card image cap"
                    />
                  </div>
                  <div class="card-body px-0 p-2 ">
                    <h5 class="card-title text-center text-wrap mb-0 mt-3">
                      {item.recipe.label}
                    </h5>

                    <button
                      onClick={handleOpen}
                      style={{
                        width: "50%",
                        margin: "0 auto",
                        fontWeight: "bolder",
                        marginTop: "10px",
                        borderRadius: "50px",
                      }}
                      type="button"
                      class="btn btn-sm px-4 mb-3 btn-success btn-open"
                    >
                      <em>See Ingredients</em>{" "}
                      <span>
                        <img
                          src="https://image.flaticon.com/icons/png/128/4005/4005677.png"
                          height="30px"
                          alt="food"
                        />
                      </span>
                    </button>
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      className={classes.modal}
                      open={open}
                      onClose={handleClose}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 500,
                      }}
                    >
                      <Fade
                        in={open}
                        style={{
                          height: "60vh",

                          width: "90%",
                          overflow: "auto",
                        }}
                      >
                        <div className={classes.paper}>
                          <button
                            onClick={handleClose}
                            className="btn btn-danger btn-close mb-3"
                          >
                            <i className="fa fa-close">
                              <b>X</b>
                            </i>
                          </button>
                          <h3 className="bg-warning text-center my-3 w-75 mx-auto shadow-box border-rounded">
                            Ingredients List
                          </h3>
                          <table className="table table-hover table-striped w-75 table-bordered table-modal  ">
                            <tr className="bg-success">
                              <th>Ingredients Name</th>
                              <th>Ingredients weight</th>
                            </tr>
                            {item.recipe.ingredients.map(
                              (ingredient, index) => (
                                <tr key={index} className="ingredient-list">
                                  <td>{ingredient.text}</td>
                                  <td>{ingredient.weight}gm</td>
                                </tr>
                              )
                            )}
                          </table>
                        </div>
                      </Fade>
                    </Modal>
                    <a
                      href={item.recipe.url}
                      target="_blank"
                      style={{
                        width: "180px",
                        margin: "5px auto",
                        fontWeight: "bolder",
                        marginTop: "-10px",
                        borderRadius: "50px",
                      }}
                      type="button"
                      class="btn btn-sm px-4 mb-3 btn-warning"
                    >
                      <em>Full Recipe </em>{" "}
                      <span>
                        <img
                          src="https://image.flaticon.com/icons/png/512/895/895609.png"
                          height="30px"
                          alt="food"
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default RecipeList;
