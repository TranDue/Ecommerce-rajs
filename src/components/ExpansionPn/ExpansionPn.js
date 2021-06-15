import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { formatMoney } from "../../pipes/priceFormatter"
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './ExpansionPn.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '50.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}))

const ExpansionPn = (props) => {
  const { price, ISBN } = props.product
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div data-aos="fade-left" className="col-md-3">
      <div className={classes.root}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography component={'div'} className={classes.heading}>eBook</Typography>
            <Typography component={'div'} className={classes.secondaryHeading}>
              <span className="num">{formatMoney(price)}</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails >
            <Typography component={'div'}>
              <button className="btn btn-warning wr"><NavLink className="nav-link" to={"/cart"}>Đặt hàng</NavLink></button>
              <div className="typo-text">
                <ul>
                  <li>ISBN {ISBN}</li>
                  <li>Digitally watermarked, DRM-free</li>
                  <li>Included format: EPUB, PDF</li>
                  <li>ebooks can be used on all reading devices</li>
                  <li>Immediate eBook download after purchase</li>
                </ul>
              </div>
            </Typography>
          </AccordionDetails >
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography component={'div'} >Một số lợi ích</Typography>
          </AccordionSummary>
          <AccordionDetails >
            <Typography component={'div'}>
              <div className="typo-text">
                <ul>
                  <li>ISBN 978-1-4842-5440-0</li>
                  <li>Digitally watermarked, DRM-free</li>
                  <li>Included format: EPUB, PDF</li>
                  <li>ebooks can be used on all reading devices</li>
                  <li>Immediate eBook download after purchase</li>
                </ul>
              </div>
            </Typography>
          </AccordionDetails >
        </Accordion>
        <Accordion >
          <AccordionSummary
          >
            <Typography component={'div'}>
              <div className="credit">
                <img className="method" src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-mo-mo.svg" alt="momo" />
              </div>
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion >
          <AccordionSummary
          >
            <Typography component={'div'}>
              <div className="rules">
                <span>FAQ</span>
                <span>Policy</span>
              </div>
            </Typography>
          </AccordionSummary>
        </Accordion>

      </div>
    </div>
  )
}
export default connect()(ExpansionPn)