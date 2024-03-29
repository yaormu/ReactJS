import { makeStyles } from "@material-ui/core";

const centeredStyleObj = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export default makeStyles ({

  container: {
    height: '100vh',
    flexDirection: 'column',
    ...centeredStyleObj
  },
  cardContainer: {
    width: 400,
    height: 200,
    padding: '2rem',
    flexDirection: 'column',
    ...centeredStyleObj
  },
  title: {
    fontSize: '4rem'
  },
  titleGridContainer: {
    ...centeredStyleObj
  },
  textFieldSearch: {
    width: '90%'
  },
  searchButton: {
    marginLeft: '.5rem'
  },
  buttonsContainer: {
    marginTop: '.5rem'
  },
  movieIcon: {
    fontSize: '3rem'
  }

});