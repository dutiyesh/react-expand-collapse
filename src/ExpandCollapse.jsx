import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  // the height of data preview
  previewHeight: PropTypes.string.isRequired,
  // any children you pass in
  children: PropTypes.node.isRequired,
  // a custom class name
  className: PropTypes.string,
  // a flag to set default state of data
  expanded: PropTypes.bool,
  // the text to show for expand
  expandText: PropTypes.string,
  // the text to show for collapse
  collapseText: PropTypes.string,
  // option to set if expanded data can be collapsed
  collapse: PropTypes.bool,
  // a flag to set ellipsis
  ellipsis: PropTypes.bool,
  // custom text to show before expand text
  ellipsisText: PropTypes.string,
  // called whenever the user clicks expand button
  onExpandClick: PropTypes.func,
  // called whenever the user clicks collapse button
  onCollapseClick: PropTypes.func,
  // called whenever the user clicks expand and collapse button
  onClick: PropTypes.func
};

const defaultProps = {
  className: "",
  expanded: false,
  expandText: "Expand",
  collapseText: "Collapse",
  collapse: true,
  ellipsis: true,
  ellipsisText: "...",
  onExpandClick: null,
  onCollapseClick: null,
  onClick: null
};

class ExpandCollapse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: this.props.expanded,
      shouldExpand: true
    };

    this.handleClick = this.handleClick.bind(this);
    this.shouldDataExpand = this.shouldDataExpand.bind(this);
    this.getContentHeight = this.getContentHeight.bind(this);
    this.getButton = this.getButton.bind(this);
    this.getButtonText = this.getButtonText.bind(this);
    this.getClassName = this.getClassName.bind(this);
    this.setScrollPosition = this.setScrollPosition.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  componentDidMount() {
    this.shouldDataExpand();
  }

  handleClick(event) {
    this.setState(
      {
        expanded: !this.state.expanded
      },
      function() {
        const { expanded } = this.state;
        const { onExpandClick, onCollapseClick, onClick } = this.props;

        if (onExpandClick) {
          if (expanded) {
            onExpandClick(event);
          }
        }

        if (onCollapseClick) {
          if (!expanded) {
            onCollapseClick(event);
          }
        }

        if (onClick) {
          onClick(event);
        }

        this.setScrollPosition();
      }
    );
  }

  setScrollPosition() {
    const { expanded } = this.state;

    if (!expanded) {
      const contentRect = this.toggleContent.getBoundingClientRect();
      if (contentRect.top < 0) {
        const offsetTop = Math.abs(
          contentRect.top +
            (window.pageYOffset || document.documentElement.scrollTop)
        );

        window.scrollTo(0, offsetTop);
      }
    }
  }

  shouldDataExpand() {
    const { expanded } = this.state;

    const contentRect = this.toggleContent.getBoundingClientRect();
    const contentBodyRect = this.toggleContent
      .querySelector(".toggle-content__body")
      .getBoundingClientRect();

    if (contentRect.height > contentBodyRect.height && !expanded) {
      this.setState({
        shouldExpand: false
      });
    }
  }

  getContentHeight() {
    const { expanded, shouldExpand } = this.state;

    const { previewHeight } = this.props;

    if (expanded || !shouldExpand) {
      return "auto";
    }

    return previewHeight;
  }

  getButton() {
    const { expanded, shouldExpand } = this.state;

    const { collapse } = this.props;

    if (shouldExpand) {
      if (!collapse && expanded) {
        return "";
      }

      const buttonText = this.getButtonText();

      return (
        <span
          className="toggle-content__button"
          onClick={this.handleClick}
          aria-label={buttonText}
          aria-expanded={expanded}
          role="button"
        >
          {buttonText}
        </span>
      );
    }

    return "";
  }

  getButtonText() {
    const { expanded } = this.state;

    const { expandText, collapseText, ellipsis, ellipsisText } = this.props;

    let text = expanded ? collapseText : expandText;

    if (ellipsis) {
      text = !expanded ? `${ellipsisText + " " + text}` : text;
    }

    return text;
  }

  getClassName() {
    const { expanded } = this.state;

    const { className } = this.props;

    const expandedClass = expanded ? "toggle-content--expanded" : "";

    const classes = ["toggle__content", expandedClass]
      .concat(className.split(" "))
      .join(" ");

    return classes;
  }

  setRef(ref) {
    this.toggleContent = ref;
  }

  render() {
    const className = this.getClassName();
    const contentHeight = this.getContentHeight();
    const button = this.getButton();

    return (
      <div
        className={className}
        ref={this.setRef}
        style={{ height: contentHeight }}
      >
        <div className="toggle-content__body">{this.props.children}</div>

        {button}
      </div>
    );
  }
}

ExpandCollapse.propTypes = propTypes;
ExpandCollapse.defaultProps = defaultProps;

export default ExpandCollapse;
