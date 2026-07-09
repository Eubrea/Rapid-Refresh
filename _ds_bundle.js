/* @ds-bundle: {"format":4,"namespace":"RapidRefreshDesignSystem_646e39","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Chip","sourcePath":"components/display/Chip.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Icon","sourcePath":"components/media/Icon.jsx"},{"name":"Logo","sourcePath":"components/media/Logo.jsx"},{"name":"SectionLabel","sourcePath":"components/media/SectionLabel.jsx"},{"name":"BoosterRow","sourcePath":"components/menu/BoosterRow.jsx"},{"name":"DripRow","sourcePath":"components/menu/DripRow.jsx"},{"name":"MembershipCard","sourcePath":"components/menu/MembershipCard.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"db4516bb582e","components/actions/IconButton.jsx":"18d7ba49a599","components/display/Badge.jsx":"c98a63855ef5","components/display/Card.jsx":"2031d33905d9","components/display/Chip.jsx":"baa30f164903","components/display/Stat.jsx":"cb6e5ad0e064","components/forms/Checkbox.jsx":"2aac7876c0db","components/forms/Input.jsx":"af136bbccdc2","components/forms/Select.jsx":"4b0e9eb8aa3f","components/media/Icon.jsx":"bc92ead1eade","components/media/Logo.jsx":"7326f5414601","components/media/SectionLabel.jsx":"35fa61d38efa","components/menu/BoosterRow.jsx":"b61ebc85a19e","components/menu/DripRow.jsx":"8602b83cbb4b","components/menu/MembershipCard.jsx":"50f5f9090c1d","ui_kits/website/About.jsx":"51caff1f4623","ui_kits/website/Booking.jsx":"a9162fac73e3","ui_kits/website/Chrome.jsx":"256898fbee96","ui_kits/website/CorporateEvents.jsx":"9206f30ab2e4","ui_kits/website/DripMenu.jsx":"99650dfe6cbd","ui_kits/website/FAQ.jsx":"62e19810951e","ui_kits/website/GiftCards.jsx":"5f79744f94ef","ui_kits/website/Home.jsx":"97394c25462a","ui_kits/website/Memberships.jsx":"e91256f0a2a1","ui_kits/website/Pricing.jsx":"5f19214d7134","ui_kits/website/ServiceArea.jsx":"df62addc7f1a","ui_kits/website/kit.jsx":"7e108f3faf7e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RapidRefreshDesignSystem_646e39 = window.RapidRefreshDesignSystem_646e39 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RapidRefresh Button — antique-gold primary, outline secondary, quiet ghost.
 * Matte finish; the only sanctioned gradient is the primary gold sheen.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  href,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '10px 18px',
      fontSize: '0.8125rem',
      letterSpacing: '0.06em',
      gap: '8px'
    },
    md: {
      padding: '14px 26px',
      fontSize: '0.875rem',
      letterSpacing: '0.06em',
      gap: '10px'
    },
    lg: {
      padding: '18px 34px',
      fontSize: '0.9375rem',
      letterSpacing: '0.05em',
      gap: '12px'
    }
  };
  const base = {
    fontFamily: 'var(--font-text)',
    fontWeight: 'var(--fw-semibold)',
    textTransform: 'uppercase',
    lineHeight: 1,
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1px solid transparent',
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    opacity: disabled ? 0.45 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...style
  };
  const variants = {
    primary: {
      background: 'var(--gold-fill)',
      color: 'var(--navy-900)',
      boxShadow: 'var(--shadow-gold)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--gold-400)',
      borderColor: 'var(--gold-a40)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ivory)',
      borderColor: 'transparent'
    },
    light: {
      background: 'var(--ivory)',
      color: 'var(--navy-800)',
      boxShadow: 'var(--shadow-sm)'
    }
  };
  const handlers = disabled ? {} : {
    onMouseEnter: e => {
      const t = e.currentTarget;
      if (variant === 'primary') {
        t.style.background = 'var(--gold-fill-hover)';
        t.style.transform = 'translateY(-1px)';
      } else if (variant === 'secondary') {
        t.style.background = 'var(--gold-a16)';
        t.style.borderColor = 'var(--gold-400)';
      } else if (variant === 'ghost') {
        t.style.color = 'var(--gold-400)';
      } else if (variant === 'light') {
        t.style.transform = 'translateY(-1px)';
      }
    },
    onMouseLeave: e => {
      const t = e.currentTarget;
      t.style.background = variants[variant].background;
      t.style.color = variants[variant].color;
      t.style.borderColor = variants[variant].borderColor || 'transparent';
      t.style.transform = 'none';
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.98)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'translateY(-1px)';
    }
  };
  const Tag = as === 'a' ? 'a' : 'button';
  const tagProps = as === 'a' ? {
    href
  } : {
    disabled,
    type: rest.type || 'button'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...variants[variant]
    },
    onClick: disabled ? undefined : onClick
  }, tagProps, handlers, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square/circular button carrying a single lucide glyph.
 * Used for click-to-call, socials, nav toggles, quantity steppers.
 */
function IconButton({
  children,
  variant = 'outline',
  size = 'md',
  round = false,
  disabled = false,
  ariaLabel,
  onClick,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 36,
    md: 44,
    lg: 52
  };
  const d = dims[size];
  const variants = {
    solid: {
      background: 'var(--gold-fill)',
      color: 'var(--navy-900)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--gold-400)',
      border: '1px solid var(--gold-a40)'
    },
    ghost: {
      background: 'var(--ivory-a08)',
      color: 'var(--ivory)',
      border: '1px solid transparent'
    }
  };
  const base = {
    width: d,
    height: d,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    ...variants[variant],
    ...style
  };
  const handlers = disabled ? {} : {
    onMouseEnter: e => {
      const t = e.currentTarget;
      if (variant === 'solid') t.style.background = 'var(--gold-fill-hover)';else {
        t.style.background = 'var(--gold-a16)';
        t.style.borderColor = 'var(--gold-400)';
      }
    },
    onMouseLeave: e => {
      const t = e.currentTarget;
      t.style.background = variants[variant].background;
      t.style.borderColor = variants[variant].border.includes('gold') ? 'var(--gold-a40)' : 'transparent';
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.94)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'none';
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    style: base
  }, handlers, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
/**
 * Badge — small status/trust marker. Gold for signature/featured, quiet
 * outline for neutral labels, solid navy for "on light" contexts.
 */
function Badge({
  children,
  variant = 'gold',
  icon = null,
  style = {}
}) {
  const variants = {
    gold: {
      background: 'var(--gold-a16)',
      color: 'var(--gold-300)',
      border: '1px solid var(--gold-a40)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--ivory-a80)',
      border: '1px solid var(--border-on-navy)'
    },
    solid: {
      background: 'var(--navy-700)',
      color: 'var(--ivory)',
      border: '1px solid var(--navy-300)'
    },
    light: {
      background: 'var(--ivory-100)',
      color: 'var(--navy-800)',
      border: '1px solid var(--ivory-300)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.04em',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...variants[variant],
      ...style
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — flat matte surface with hairline border and soft (never glowing) shadow.
 * `tone` sets navy vs ivory context; `interactive` adds a gentle hover lift.
 */
function Card({
  children,
  tone = 'navy',
  padding = 'lg',
  interactive = false,
  bordered = true,
  style = {},
  ...rest
}) {
  const pads = {
    none: 0,
    sm: '18px',
    md: '24px',
    lg: '32px',
    xl: '40px'
  };
  const isNavy = tone === 'navy';
  const base = {
    background: isNavy ? 'var(--surface-card)' : 'var(--ivory)',
    color: isNavy ? 'var(--text-on-navy)' : 'var(--text-on-light)',
    border: bordered ? `1px solid ${isNavy ? 'var(--border-on-navy)' : 'var(--border-on-light)'}` : 'none',
    borderRadius: 'var(--radius-lg)',
    padding: pads[padding],
    boxShadow: 'var(--shadow-card)',
    transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
    ...style
  };
  const handlers = interactive ? {
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lift)';
      e.currentTarget.style.borderColor = 'var(--gold-a40)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = 'var(--shadow-card)';
      e.currentTarget.style.borderColor = isNavy ? 'var(--border-on-navy)' : 'var(--border-on-light)';
    }
  } : {};
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base
  }, handlers, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chip — selectable filter/tag for the drip menu ("Athletes", "Recovery",
 * "Immunity"). Toggles between quiet and gold-selected.
 */
function Chip({
  children,
  selected = false,
  icon = null,
  onClick,
  style = {}
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 18px',
    borderRadius: 'var(--radius-pill)',
    fontFamily: 'var(--font-text)',
    fontSize: 'var(--fs-sm)',
    fontWeight: 'var(--fw-medium)',
    cursor: 'pointer',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
    border: selected ? '1px solid var(--gold-400)' : '1px solid var(--border-on-navy)',
    background: selected ? 'var(--gold-a16)' : 'transparent',
    color: selected ? 'var(--gold-300)' : 'var(--ivory-a80)',
    ...style
  };
  const handlers = {
    onMouseEnter: e => {
      if (!selected) {
        e.currentTarget.style.borderColor = 'var(--gold-a40)';
        e.currentTarget.style.color = 'var(--ivory)';
      }
    },
    onMouseLeave: e => {
      if (!selected) {
        e.currentTarget.style.borderColor = 'var(--border-on-navy)';
        e.currentTarget.style.color = 'var(--ivory-a80)';
      }
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: base
  }, handlers), icon, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Chip.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
/**
 * Stat — a large display figure with a label, for trust/proof rows
 * ("22+ Years Acute Care", "100% RN-Led"). Optional gold hairline above.
 */
function Stat({
  value,
  label,
  tone = 'onNavy',
  rule = true,
  align = 'left',
  style = {}
}) {
  const valueColor = 'var(--gold-400)';
  const labelColor = tone === 'onNavy' ? 'var(--ivory-a64)' : 'var(--slate-ink)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      gap: '10px',
      ...style
    }
  }, rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 1,
      background: 'var(--gold-a40)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--fs-d2)',
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color: valueColor
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-sm)',
      letterSpacing: '0.04em',
      color: labelColor,
      maxWidth: '22ch'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * Checkbox — for medical-consent, marketing opt-in, add-on toggles.
 * Gold check when selected. Controlled or uncontrolled.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  tone = 'onNavy',
  id,
  style = {}
}) {
  const boxId = id || (typeof label === 'string' ? label.toLowerCase().replace(/\s+/g, '-').slice(0, 24) : undefined);
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const onNavy = tone === 'onNavy';
  const toggle = e => {
    if (!isControlled) setInternal(!internal);
    onChange && onChange(!on, e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: boxId,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      cursor: 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: boxId,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 22,
      height: 22,
      flex: '0 0 auto',
      marginTop: 1,
      borderRadius: 'var(--radius-xs)',
      border: `1px solid ${on ? 'var(--gold-400)' : onNavy ? 'var(--navy-300)' : 'var(--ivory-300)'}`,
      background: on ? 'var(--gold-fill)' : 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--navy-900)",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 1.5,
      color: onNavy ? 'var(--ivory-a80)' : 'var(--slate-ink)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field for booking &amp; intake forms. Label + optional hint/error.
 * Tone adapts to navy or ivory surfaces. Focus = gold hairline.
 */
function Input({
  label,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  hint,
  error,
  required = false,
  tone = 'onNavy',
  icon = null,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const onNavy = tone === 'onNavy';
  const [focused, setFocused] = React.useState(false);
  const fieldColor = onNavy ? 'var(--ivory)' : 'var(--charcoal)';
  const fieldBg = onNavy ? 'var(--navy-700)' : '#FFFFFF';
  const borderBase = error ? 'var(--danger)' : onNavy ? 'var(--navy-300)' : 'var(--ivory-300)';
  const borderColor = focused && !error ? 'var(--gold-400)' : borderBase;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: onNavy ? 'var(--ivory-a80)' : 'var(--slate-ink)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-400)',
      marginLeft: 4
    }
  }, "*")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      display: 'inline-flex',
      color: 'var(--gold-400)'
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    required: required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: icon ? '13px 16px 13px 42px' : '13px 16px',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-body)',
      color: fieldColor,
      background: fieldBg,
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out)'
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-xs)',
      color: error ? 'var(--danger)' : onNavy ? 'var(--ivory-a44)' : 'var(--slate-ink)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — styled native dropdown for booking (service, location, time).
 * Matches Input styling; gold chevron.
 */
function Select({
  label,
  options = [],
  value,
  onChange,
  required = false,
  tone = 'onNavy',
  id,
  style = {},
  ...rest
}) {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const onNavy = tone === 'onNavy';
  const [focused, setFocused] = React.useState(false);
  const borderColor = focused ? 'var(--gold-400)' : onNavy ? 'var(--navy-300)' : 'var(--ivory-300)';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: onNavy ? 'var(--ivory-a80)' : 'var(--slate-ink)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-400)',
      marginLeft: 4
    }
  }, "*")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    value: value,
    onChange: onChange,
    required: required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      appearance: 'none',
      WebkitAppearance: 'none',
      padding: '13px 42px 13px 16px',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-body)',
      color: onNavy ? 'var(--ivory)' : 'var(--charcoal)',
      background: onNavy ? 'var(--navy-700)' : '#FFFFFF',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      cursor: 'pointer',
      transition: 'border-color var(--dur-fast) var(--ease-out)'
    }
  }, rest), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val,
      style: {
        color: '#1A1E28'
      }
    }, lab);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--gold-400)",
    strokeWidth: "2",
    style: {
      position: 'absolute',
      right: 16,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/media/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — thin wrapper over lucide (loaded globally as `window.lucide`).
 * Renders an inline SVG with on-brand defaults (1.75 stroke, currentColor).
 * Requires the lucide UMD script on the page.
 */
function Icon({
  name,
  size = 22,
  strokeWidth = 1.75,
  color = 'currentColor',
  style = {},
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (!host) return;
    host.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', name);
    host.appendChild(i);
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons({
        nameAttr: 'data-lucide',
        attrs: {
          width: size,
          height: size,
          'stroke-width': strokeWidth,
          stroke: 'currentColor'
        }
      });
    }
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color,
      width: size,
      height: size,
      flex: '0 0 auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Icon.jsx", error: String((e && e.message) || e) }); }

// components/media/Logo.jsx
try { (() => {
/**
 * Logo — the RapidRefresh droplet mark with optional wordmark.
 * Pass `src` (relative path to logo.png). Soft warm drop shadow, never a glow.
 */
function Logo({
  src,
  size = 48,
  showWordmark = true,
  layout = 'horizontal',
  tone = 'onNavy',
  style = {}
}) {
  const wordColor = tone === 'onNavy' ? 'var(--ivory)' : 'var(--navy-800)';
  const subColor = tone === 'onNavy' ? 'var(--gold-400)' : 'var(--gold-600)';
  const isStacked = layout === 'stacked';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      flexDirection: isStacked ? 'column' : 'row',
      gap: isStacked ? '12px' : '14px',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "RapidRefresh",
    width: size,
    height: size,
    style: {
      width: size,
      height: size,
      filter: 'drop-shadow(var(--shadow-logo))'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'var(--navy-700)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--gold-400)',
      fontFamily: 'var(--font-display)',
      fontSize: size * 0.42,
      filter: 'drop-shadow(var(--shadow-logo))'
    }
  }, "R"), showWordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: isStacked ? 'center' : 'flex-start',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-medium)',
      fontSize: size * 0.44,
      letterSpacing: '-0.01em',
      color: wordColor
    }
  }, "RapidRefresh"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: Math.max(9, size * 0.16),
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: subColor,
      marginTop: size * 0.11
    }
  }, "Mobile IV & Wellness")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Logo.jsx", error: String((e && e.message) || e) }); }

// components/media/SectionLabel.jsx
try { (() => {
/**
 * SectionLabel — the brand's eyebrow. NOT a pill, and NOT the generic
 * "dash + caps" AI trope. A small filled gold droplet (the logo motif)
 * sits before wide-tracked small caps. `variant="underline"` swaps the
 * droplet for an editorial gold underline beneath the text instead.
 */
function SectionLabel({
  children,
  tone = 'gold',
  align = 'left',
  variant = 'droplet',
  style = {}
}) {
  const color = tone === 'gold' ? 'var(--gold-500)' : tone === 'onLight' ? 'var(--slate-ink)' : 'var(--ivory-a64)';
  const mark = tone === 'onLight' ? 'var(--gold-600)' : 'var(--gold-400)';
  const textStyle = {
    fontFamily: 'var(--font-text)',
    fontSize: 'var(--fs-label)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-label)',
    textTransform: 'uppercase',
    color
  };
  if (variant === 'underline') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        gap: '8px',
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: textStyle
    }, children), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 2,
        background: mark,
        borderRadius: 2
      }
    }));
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "14",
    viewBox: "0 0 24 30",
    "aria-hidden": "true",
    style: {
      flex: '0 0 auto',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 0C12 0 2 12 2 19a10 10 0 0 0 20 0C22 12 12 0 12 0Z",
    fill: mark
  })), /*#__PURE__*/React.createElement("span", {
    style: textStyle
  }, children));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/menu/BoosterRow.jsx
try { (() => {
/**
 * BoosterRow — a compact add-on line (injection / vitamin / amino booster):
 * name, best-for, price, and an optional add control. Meant for a two- or
 * three-column grid of boosters.
 */
function BoosterRow({
  name,
  bestFor,
  price,
  onAdd,
  added = false,
  tone = 'onNavy',
  style = {}
}) {
  const onNavy = tone === 'onNavy';
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      padding: '16px 18px',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${hover ? 'var(--gold-a40)' : onNavy ? 'var(--border-on-navy)' : 'var(--border-on-light)'}`,
      background: onNavy ? 'var(--navy-700)' : '#FFFFFF',
      transition: 'border-color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-semibold)',
      color: onNavy ? 'var(--ivory)' : 'var(--charcoal)'
    }
  }, name), bestFor && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-xs)',
      color: onNavy ? 'var(--ivory-a44)' : 'var(--slate-ink)'
    }
  }, bestFor)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.25rem',
      fontWeight: 'var(--fw-light)',
      color: 'var(--gold-400)'
    }
  }, "$", price), onAdd && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAdd,
    "aria-label": added ? 'Remove ' + name : 'Add ' + name,
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      cursor: 'pointer',
      border: `1px solid ${added ? 'var(--gold-400)' : 'var(--navy-300)'}`,
      background: added ? 'var(--gold-fill)' : 'transparent',
      color: added ? 'var(--navy-900)' : 'var(--gold-400)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: added ? 'check' : 'plus',
    size: 16,
    color: "currentColor"
  }))));
}
Object.assign(__ds_scope, { BoosterRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/BoosterRow.jsx", error: String((e && e.message) || e) }); }

// components/menu/DripRow.jsx
try { (() => {
/**
 * DripRow — one signature IV drip as a menu line: icon, name (+ optional ™ &amp;
 * Signature tag), "best for" descriptor, and the two-tier Standard/Premium price.
 * Reveals a hairline on hover. Designed for a vertical menu list on navy.
 */
function DripRow({
  name,
  bestFor,
  standard,
  premium,
  icon = 'droplet',
  signature = false,
  onSelect,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onSelect,
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      alignItems: 'center',
      gap: '22px',
      padding: '26px 4px',
      borderBottom: '1px solid var(--border-on-navy)',
      cursor: onSelect ? 'pointer' : 'default',
      transition: 'padding var(--dur-base) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      border: `1px solid ${hover ? 'var(--gold-400)' : 'var(--navy-300)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--gold-400)',
      flex: '0 0 auto',
      transition: 'border-color var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      minWidth: 0
    }
  }, signature && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-label)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--gold-400)'
    }
  }, "Signature"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-d3)',
      fontWeight: 'var(--fw-regular)',
      letterSpacing: '-0.01em',
      color: 'var(--ivory)',
      lineHeight: 1.1
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--ivory-a64)'
    }
  }, bestFor)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: '30px',
      alignItems: 'flex-end',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(PriceCol, {
    tier: "Standard",
    price: standard
  }), premium != null && /*#__PURE__*/React.createElement(PriceCol, {
    tier: "Premium",
    price: premium,
    accent: true
  })));
}
function PriceCol({
  tier,
  price,
  accent = false
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: '0.6875rem',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ivory-a44)'
    }
  }, tier), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      fontWeight: 'var(--fw-light)',
      letterSpacing: '-0.01em',
      color: accent ? 'var(--gold-400)' : 'var(--ivory)'
    }
  }, "$", price));
}
Object.assign(__ds_scope, { DripRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/DripRow.jsx", error: String((e && e.message) || e) }); }

// components/menu/MembershipCard.jsx
try { (() => {
/**
 * MembershipCard — a wellness-club tier: name, monthly price, benefit list,
 * and CTA. `featured` gives the gold-accented "most popular" treatment.
 */
function MembershipCard({
  name,
  price,
  cadence = '/month',
  tagline,
  features = [],
  cta = 'Become a Member',
  featured = false,
  onSelect,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: featured ? 'var(--navy-500)' : 'var(--surface-card)',
      border: `1px solid ${featured ? 'var(--gold-a40)' : 'var(--border-on-navy)'}`,
      borderRadius: 'var(--radius-lg)',
      padding: '36px 32px 32px',
      boxShadow: featured ? 'var(--shadow-lift)' : 'var(--shadow-card)',
      ...style
    }
  }, featured && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-label)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      marginBottom: '10px'
    }
  }, "Most Chosen"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: featured ? 'var(--ivory-a80)' : 'var(--gold-400)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '6px',
      marginTop: '16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '3rem',
      fontWeight: 'var(--fw-light)',
      letterSpacing: '-0.02em',
      color: 'var(--ivory)',
      lineHeight: 1
    }
  }, "$", price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--ivory-a44)'
    }
  }, cadence)), tagline && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--ivory-a64)',
      marginTop: '12px',
      lineHeight: 1.55
    }
  }, tagline), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      background: 'var(--gold-a40)',
      margin: '26px 0'
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      flex: 1
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--ivory-a80)',
      lineHeight: 1.45
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-400)',
      marginTop: 1,
      flex: '0 0 auto',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 17
  })), f))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: featured ? 'primary' : 'secondary',
    fullWidth: true,
    onClick: onSelect,
    style: {
      marginTop: '30px'
    }
  }, cta));
}
Object.assign(__ds_scope, { MembershipCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/MembershipCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
/* global React, Photo, Reveal */
const DSa = window.RapidRefreshDesignSystem_646e39;
function About({
  onNavigate
}) {
  const {
    Button,
    Icon,
    SectionLabel,
    Stat
  } = DSa;
  const badges = [['award', '22+ Years of Acute-Care Experience'], ['user-round-check', 'RN-Led Concierge Care'], ['shield-check', 'Fully Insured Mobile Practice'], ['flask-conical', 'Evidence-Based Wellness'], ['lock', 'HIPAA-Compliant Care'], ['clock', 'Same-Day Mobile Appointments']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-900)',
      padding: 'clamp(56px,6vw,104px) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'clamp(32px,5vw,72px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingBottom: 56,
      paddingRight: 56
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    src: "../../assets/photos/Founder About Section.webp",
    alt: "Rahab Njuguna, RN",
    ratio: "3 / 4"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: '46%'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    src: "../../assets/photos/Founder 2.webp",
    alt: "Rahab at the RapidRefresh studio",
    ratio: "3 / 4",
    radius: "var(--radius-lg)",
    style: {
      border: '6px solid var(--navy-900)'
    }
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Rahab Njuguna, RN \xB7 Founder"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d1)',
      color: 'var(--ivory)',
      letterSpacing: '-0.02em',
      margin: '20px 0 0',
      maxWidth: '18ch'
    }
  }, "Hospital expertise. Concierge care."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ivory-a80)',
      fontSize: 'var(--fs-lg)',
      lineHeight: 1.7,
      margin: '26px 0 0',
      maxWidth: '54ch'
    }
  }, "With over 22 years of acute-care nursing experience, I founded RapidRefresh Mobile IV & Wellness to combine hospital-level clinical expertise with the comfort and convenience of luxury concierge IV therapy."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ivory-a64)',
      fontSize: '16px',
      lineHeight: 1.7,
      margin: '18px 0 0',
      maxWidth: '54ch'
    }
  }, "My mission is simple: to deliver safe, personalized IV hydration and wellness services that help you look, feel, and perform at your best, with the professionalism, compassion, and exceptional care you deserve."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      margin: '34px 0 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 1,
      background: 'var(--gold-400)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      color: 'var(--gold-400)',
      letterSpacing: '0.01em'
    }
  }, "Safety. Comfort. Results."))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ivory)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "onLight"
  }, "Why You Can Trust Us"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24,
      marginTop: 44
    }
  }, badges.map(([ic, t], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 16,
      padding: '24px 0',
      borderTop: '1px solid var(--ivory-300)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 24,
    color: "currentColor"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '16px',
      fontWeight: 500,
      color: 'var(--charcoal)',
      lineHeight: 1.4
    }
  }, t))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-800)',
      padding: 'var(--section-y-tight) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-text)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d1)',
      color: 'var(--ivory)',
      letterSpacing: '-0.02em'
    }
  }, "Experience the difference."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      justifyContent: 'center',
      marginTop: 30,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate('booking')
  }, "Book Your Drip"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNavigate('menu')
  }, "View the Drip Menu")))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Booking.jsx
try { (() => {
/* global React */
const DSb = window.RapidRefreshDesignSystem_646e39;
function Booking({
  onJane
}) {
  const {
    Button,
    Icon,
    SectionLabel,
    Input,
    Select,
    Checkbox,
    Card
  } = DSb;
  const pill = {
    borderRadius: 'var(--radius-pill)'
  };
  const [step] = React.useState(1);
  const steps = [['calendar-check', 'Request', 'Choose your drip, location, and preferred time.'], ['clipboard-list', 'Intake & Consent', 'Complete a quick HIPAA-conscious health intake.'], ['car-front', 'We Arrive', 'Your RN arrives on schedule and delivers your drip.']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-900)',
      padding: 'clamp(56px,6vw,96px) var(--gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Book an Appointment"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d1)',
      color: 'var(--ivory)',
      letterSpacing: '-0.02em',
      margin: '20px 0 0',
      maxWidth: '20ch'
    }
  }, "Concierge IV therapy, on your schedule."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      flexWrap: 'wrap',
      marginTop: 34,
      padding: '20px 26px',
      background: 'var(--navy-800)',
      border: '1px solid var(--gold-a40)',
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      flex: '0 0 auto',
      borderRadius: '50%',
      background: 'var(--gold-a16)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--gold-400)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-check",
    size: 22,
    color: "currentColor"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '1.25rem',
      color: 'var(--ivory)'
    }
  }, "Prefer to book instantly?"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ivory-a64)',
      fontSize: '14px',
      marginTop: 2
    }
  }, "See live availability and reserve on our JaneApp scheduler."))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "md",
    style: pill,
    onClick: onJane,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 16,
      color: "currentColor"
    })
  }, "Book on JaneApp")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      margin: '30px 0 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--navy-300)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ivory-a44)',
      fontSize: '12px',
      letterSpacing: '0.16em',
      textTransform: 'uppercase'
    }
  }, "Or request below"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--navy-300)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 0.8fr',
      gap: 'clamp(28px,4vw,56px)',
      marginTop: 52,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "navy",
    padding: "xl"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => e.preventDefault(),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full Name",
    required: true,
    placeholder: "Jane Doe",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "user",
      size: 17,
      color: "currentColor"
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    type: "tel",
    required: true,
    placeholder: "(713) 851-7590",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 17,
      color: "currentColor"
    })
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    required: true,
    placeholder: "you@email.com",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 17,
      color: "currentColor"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Select Your Drip",
    required: true,
    options: ['Essential Hydration', 'Energy Reset', 'RapidRefresh Defense', "Myers' Cocktail", 'Game Day Drip™', 'Glass Skin Drip', 'Morning After Rescue™', 'NAD+ Renewal']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Service Location",
    required: true,
    options: ['Home', 'Office', 'Gym', 'Hotel']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Preferred Date",
    type: "date",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Preferred Time",
    required: true,
    options: ['Morning (8–11 AM)', 'Midday (11 AM–2 PM)', 'Afternoon (2–5 PM)', 'Evening (5–8 PM)']
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Service Address",
    placeholder: "Street, City, ZIP, Greater Houston",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 17,
      color: "currentColor"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--navy-300)',
      margin: '4px 0'
    }
  }), /*#__PURE__*/React.createElement(Checkbox, {
    required: true,
    label: "I consent to treatment and confirm my intake information is accurate. (HIPAA-conscious)"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me member-only offers and wellness tips."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    style: pill,
    type: "submit",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18,
      color: "currentColor"
    })
  }, "Request Appointment"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ivory-a44)',
      fontSize: '13px',
      textAlign: 'center',
      margin: 0
    }
  }, "Powered by JaneApp \xB7 Secure online booking & payments"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      position: 'relative',
      border: '1px solid var(--navy-300)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/Founder.webp",
    alt: "Rahab Njuguna, RN",
    style: {
      width: '100%',
      display: 'block',
      aspectRatio: '4 / 5',
      objectFit: 'cover',
      objectPosition: 'center top'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '46px 22px 18px',
      background: 'linear-gradient(180deg, rgba(7,18,51,0) 0%, rgba(7,18,51,0.88) 74%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '1.2rem',
      color: 'var(--ivory)'
    }
  }, "Rahab Njuguna, RN"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--gold-400)',
      fontSize: '11.5px',
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      marginTop: 4
    }
  }, "Your Nurse \xB7 22+ Years"))), /*#__PURE__*/React.createElement(Card, {
    tone: "navy",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '1.375rem',
      color: 'var(--ivory)',
      marginBottom: 22
    }
  }, "How it works"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, steps.map(([ic, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 16,
      opacity: i + 1 <= step ? 1 : 0.72
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      flex: '0 0 auto',
      borderRadius: '50%',
      border: '1px solid var(--gold-a40)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--gold-400)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 19,
    color: "currentColor"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 600,
      fontSize: '15px',
      color: 'var(--ivory)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ivory-a64)',
      fontSize: '14px',
      lineHeight: 1.5,
      marginTop: 4
    }
  }, d)))))), /*#__PURE__*/React.createElement(Card, {
    tone: "navy",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--gold-400)',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 18,
    color: "currentColor"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase'
    }
  }, "Good to Know")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['credit-card', 'Payment', 'All major cards, HSA, and FSA accepted. Secure payment through JaneApp at booking.'], ['calendar-x', 'Cancellations', 'Kindly give reasonable notice to reschedule. Full terms are shared when you book.'], ['file-check', 'Consent', 'A quick, HIPAA-conscious intake and medical consent are completed before every visit.']].map(([ic, t, d]) => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      color: 'var(--gold-400)',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 17,
    color: "currentColor"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 600,
      fontSize: '14px',
      color: 'var(--ivory)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ivory-a64)',
      fontSize: '13.5px',
      lineHeight: 1.55,
      marginTop: 3
    }
  }, d)))))), /*#__PURE__*/React.createElement(Card, {
    tone: "navy",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--gold-400)',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18,
    color: "currentColor"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase'
    }
  }, "Prefer to Call?")), /*#__PURE__*/React.createElement("a", {
    href: "tel:+17138517590",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: '1.875rem',
      color: 'var(--ivory)',
      letterSpacing: '-0.01em'
    }
  }, "(713) 851-7590"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ivory-a64)',
      fontSize: '14px',
      marginTop: 10
    }
  }, "By appointment only \xB7 Same-day when available.")))))));
}
window.Booking = Booking;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Booking.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
/* global React */
// Site chrome: top navigation + footer.
const DSc = window.RapidRefreshDesignSystem_646e39;
const JANEAPP = 'https://rapidrefreshivtherapy.janeapp.com/';
const INSTAGRAM = 'https://www.instagram.com/rapidrefreshivtherapy/';

/**
 * Nav — "The Infusion Line".
 * The nav IS an IV line: links are ports mounted on gold tubing, a droplet of
 * fluid travels down the line to the active page (chasing your hover on the way),
 * the tubing fills behind it, and a slow drip falls from the droplet — nav as
 * infusion in progress. On pages without a port the droplet parks at the
 * reservoir (the logo).
 */
function Nav({
  current = 'home',
  onNavigate,
  onBook,
  overHero = false
}) {
  const {
    Button,
    Icon,
    Logo
  } = DSc;
  const [scrolled, setScrolled] = React.useState(false);
  const [hovered, setHovered] = React.useState(null);
  const [ports, setPorts] = React.useState({}); // link id -> x center on the rail
  const railRef = React.useRef(null);
  const nodeRefs = React.useRef({});
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [['menu', 'Drip Menu'], ['memberships', 'Memberships'], ['pricing', 'Pricing'], ['service', 'Service Area'], ['corporate', 'Corporate'], ['about', 'About']];

  // Measure each port's position on the rail (re-measured on resize / font load).
  const measure = React.useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const r = rail.getBoundingClientRect();
    const next = {};
    Object.entries(nodeRefs.current).forEach(([id, el]) => {
      if (el) {
        const b = el.getBoundingClientRect();
        next[id] = b.left - r.left + b.width / 2;
      }
    });
    setPorts(next);
  }, []);
  React.useLayoutEffect(() => {
    measure();
    const t = setTimeout(measure, 350);
    window.addEventListener('resize', measure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', measure);
    };
  }, [measure]);
  const RAIL_LEAD = 36; // tubing extends left toward the logo (the "reservoir")
  const targetId = hovered || (links.some(([id]) => id === current) ? current : null);
  const parked = targetId == null || ports[targetId] == null;
  const dropX = parked ? -RAIL_LEAD + 10 : ports[targetId];

  // Transparent only when sitting over the navy hero AND not yet scrolled.
  const transparent = overHero && !scrolled;
  const pill = {
    borderRadius: 'var(--radius-pill)'
  };
  const glide = 'left 520ms var(--ease-out)';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: transparent ? 'transparent' : 'rgba(7,18,51,0.88)',
      backdropFilter: transparent ? 'none' : 'blur(10px)',
      WebkitBackdropFilter: transparent ? 'none' : 'blur(10px)',
      borderBottom: transparent ? '1px solid transparent' : '1px solid var(--navy-300)',
      transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes rr-nav-drip{0%{opacity:0;transform:translateY(0) scale(.5)}14%{opacity:.95}70%{opacity:.3}100%{opacity:0;transform:translateY(15px) scale(1)}}`), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '15px var(--gutter) 13px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 30
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('home'),
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    src: "../../assets/logo-512.png",
    size: 40,
    showWordmark: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '1.05rem',
      letterSpacing: '-0.01em',
      color: 'var(--ivory)'
    }
  }, "RapidRefresh")), /*#__PURE__*/React.createElement("nav", {
    ref: railRef,
    onMouseLeave: () => setHovered(null),
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      gap: 30
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: -RAIL_LEAD,
      right: -18,
      bottom: 3,
      height: 1,
      background: 'var(--ivory-a12)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: -RAIL_LEAD,
      bottom: 2.5,
      height: 2,
      width: Math.max(dropX + RAIL_LEAD, 6),
      background: 'linear-gradient(90deg, var(--gold-a40), var(--gold-400))',
      borderRadius: 2,
      transition: 'width 520ms var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: dropX - 5,
      bottom: -1.5,
      width: 10,
      height: 10,
      borderRadius: '0 50% 50% 50%',
      transform: 'rotate(45deg)',
      background: 'radial-gradient(circle at 32% 30%, var(--gold-200), var(--gold-500) 72%)',
      boxShadow: '0 0 9px var(--gold-a40)',
      transition: glide,
      opacity: parked ? 0.65 : 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: dropX - 2,
      bottom: -17,
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: 'var(--gold-400)',
      animation: 'rr-nav-drip 3.4s ease-in infinite',
      transition: glide
    }
  }), links.map(([id, label]) => {
    const lit = current === id || hovered === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => onNavigate(id),
      onMouseEnter: () => setHovered(id),
      style: {
        position: 'relative',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        padding: '6px 1px 17px',
        fontFamily: 'var(--font-text)',
        fontSize: '13.5px',
        fontWeight: 500,
        letterSpacing: '0.01em',
        color: current === id ? 'var(--gold-400)' : hovered === id ? 'var(--ivory)' : 'var(--ivory-a80)',
        transition: 'color var(--dur-fast) var(--ease-out)',
        whiteSpace: 'nowrap'
      }
    }, label, /*#__PURE__*/React.createElement("span", {
      ref: el => {
        nodeRefs.current[id] = el;
      },
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        left: '50%',
        bottom: 0,
        transform: 'translateX(-50%)',
        width: 7,
        height: 7,
        borderRadius: '50%',
        boxSizing: 'border-box',
        background: lit ? 'var(--gold-400)' : 'transparent',
        border: '1px solid ' + (lit ? 'var(--gold-400)' : 'var(--gold-a40)'),
        transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+17138517590",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--ivory-a80)',
      fontSize: '13.5px',
      fontWeight: 500,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15,
    color: "var(--gold-400)"
  }), " (713) 851-7590"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    style: pill,
    onClick: onBook
  }, "Book Your Drip"))));
}
function Footer({
  onNavigate,
  onJane
}) {
  const {
    Icon,
    Logo
  } = DSc;
  const seo = ['Mobile IV Therapy Houston', 'Houston IV Hydration', 'IV Drip Near Me', 'Mobile IV Nurse Houston', 'Hangover IV Houston', 'Myers Cocktail Houston', 'Vitamin IV Therapy Houston'];
  const areas = ['Houston', 'Sugar Land', 'Katy', 'The Woodlands', 'Pearland', 'Missouri City', 'Alvin', 'Manvel', 'Fresno'];
  const socials = [['at-sign', INSTAGRAM, 'Instagram'], ['phone', 'tel:+17138517590', 'Call'], ['mail', 'mailto:hello@rapidrefreshiv.com', 'Email']];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-900)',
      borderTop: '1px solid var(--navy-300)',
      paddingTop: 'var(--section-y-tight)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
      gap: 44,
      paddingBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    src: "../../assets/logo-512.png",
    size: 46,
    showWordmark: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '1.15rem',
      color: 'var(--ivory)'
    }
  }, "RapidRefresh")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ivory-a64)',
      fontSize: '14px',
      lineHeight: 1.6,
      marginTop: 20,
      maxWidth: '34ch'
    }
  }, "RN-led mobile IV hydration & wellness, delivered to your home, office, gym, or hotel across Greater Houston."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 22
    }
  }, socials.map(([n, href, label]) => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: href,
    target: "_blank",
    rel: "noopener",
    "aria-label": label,
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: '1px solid var(--navy-300)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--gold-400)',
      transition: 'border-color var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 18
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: 'var(--gold-400)',
      fontFamily: 'var(--font-text)',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      marginBottom: 18
    }
  }, "Service Area"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, areas.map(a => /*#__PURE__*/React.createElement("li", {
    key: a
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('service'),
    style: {
      background: 'none',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      color: 'var(--ivory-a64)',
      fontSize: '14px'
    }
  }, a))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: 'var(--gold-400)',
      fontFamily: 'var(--font-text)',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      marginBottom: 18
    }
  }, "Explore"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, [['menu', 'Drip Menu'], ['pricing', 'Pricing'], ['memberships', 'Memberships'], ['giftcards', 'Gift Cards'], ['corporate', 'Corporate & Events'], ['faq', 'FAQ'], ['about', 'About the Nurse']].map(([id, l]) => /*#__PURE__*/React.createElement("li", {
    key: id
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate(id),
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      padding: 0,
      color: 'var(--ivory-a64)',
      fontSize: '14px'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: 'var(--gold-400)',
      fontFamily: 'var(--font-text)',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      marginBottom: 18
    }
  }, "Book"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    onClick: onJane,
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      padding: 0,
      color: 'var(--ivory-a64)',
      fontSize: '14px'
    }
  }, "Book on JaneApp")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('booking'),
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      padding: 0,
      color: 'var(--ivory-a64)',
      fontSize: '14px'
    }
  }, "Request an Appointment")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "tel:+17138517590",
    style: {
      color: 'var(--ivory-a64)',
      fontSize: '14px'
    }
  }, "(713) 851-7590")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: INSTAGRAM,
    target: "_blank",
    rel: "noopener",
    style: {
      color: 'var(--ivory-a64)',
      fontSize: '14px'
    }
  }, "@rapidrefreshivtherapy"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--navy-300)',
      padding: '22px 0 30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px 18px',
      marginBottom: 18
    }
  }, seo.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      color: 'var(--ivory-a44)',
      fontSize: '12px'
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12,
      color: 'var(--ivory-a44)',
      fontSize: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 RapidRefresh Mobile IV & Wellness \xB7 Houston, TX"), /*#__PURE__*/React.createElement("span", null, "HIPAA-Conscious \xB7 Fully Insured \xB7 RN-Led")))));
}
Object.assign(window, {
  Nav,
  Footer,
  RR_JANEAPP: JANEAPP,
  RR_INSTAGRAM: INSTAGRAM
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CorporateEvents.jsx
try { (() => {
/* global React, Photo, Reveal */
const DSce = window.RapidRefreshDesignSystem_646e39;
const pillCE = {
  borderRadius: 'var(--radius-pill)'
};
function CorporateEvents({
  onNavigate,
  onBook
}) {
  const {
    Button,
    Icon,
    SectionLabel
  } = DSce;
  const corporate = ['Corporate Offices & HQs', 'Conferences & Summits', 'Wellness Days & Retreats', 'Sales Kickoffs & Off-sites'];
  const events = ['Bridal & Bachelorette Parties', 'Birthday Celebrations', 'Fitness Competitions', 'Milestone & Private Events'];
  const perks = [['users', 'Custom Group Pricing', 'Flexible per-person and package rates scaled to your group size and drips.'], ['calendar-clock', 'On-Site & On-Schedule', 'We handle setup and timing so your event flows without interruption.'], ['clipboard-check', 'Clinical Peace of Mind', 'RN-led, HIPAA-conscious care with intake and consent handled discreetly.'], ['sparkles', 'A Luxury Touchpoint', 'A memorable, premium wellness moment your guests will talk about.']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-900)',
      padding: 'clamp(56px,6vw,104px) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 'clamp(32px,5vw,72px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Corporate & Events"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d1)',
      color: 'var(--ivory)',
      letterSpacing: '-0.02em',
      margin: '20px 0 0',
      maxWidth: '18ch'
    }
  }, "Group wellness, delivered in style."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ivory-a80)',
      fontSize: 'var(--fs-lg)',
      lineHeight: 1.6,
      margin: '22px 0 0',
      maxWidth: '50ch'
    }
  }, "From boardrooms to bridal suites, we bring concierge IV therapy to your team or celebration, set up on-site and tailored to your schedule."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 34,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: pillCE,
    onClick: onBook
  }, "Request Group Pricing"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: pillCE,
    onClick: () => onNavigate('menu')
  }, "View the Drip Menu"))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Photo, {
    src: "../../assets/photos/corporate-hero.webp",
    alt: "Corporate wellness day",
    caption: "Corporate wellness day",
    ratio: "4 / 5",
    radius: "var(--radius-xl)"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ivory)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 26
    }
  }, [['briefcase', 'Corporate Wellness', 'On-site hydration that keeps teams sharp, energized, and cared for.', corporate, 'var(--ivory-100)'], ['gem', 'Private Events', 'A glowing, memorable wellness moment for your celebration.', events, 'var(--gold-a16)']].map(([ic, title, blurb, list, tint], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: title,
    delay: i * 90
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: tint,
      borderRadius: 'var(--radius-xl)',
      padding: 'clamp(28px,3vw,44px)',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 58,
      height: 58,
      borderRadius: '50%',
      background: 'var(--ivory)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--gold-600)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 28,
    color: "currentColor"
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-d3)',
      color: 'var(--charcoal)',
      margin: '22px 0 10px',
      letterSpacing: '-0.01em'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--slate-ink)',
      fontSize: '15px',
      lineHeight: 1.6,
      margin: '0 0 22px',
      maxWidth: '38ch'
    }
  }, blurb), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, list.map((item, j) => /*#__PURE__*/React.createElement("li", {
    key: item,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '13px 0',
      borderBottom: j < list.length - 1 ? '1px solid rgba(58,65,79,0.12)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      flex: '0 0 auto',
      borderRadius: '50%',
      background: 'var(--ivory)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--gold-600)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    color: "currentColor"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '15.5px',
      color: 'var(--charcoal)',
      fontWeight: 500
    }
  }, item))))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ivory-100)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "onLight",
    align: "center"
  }, "Why Book With Us"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d1)',
      color: 'var(--charcoal)',
      letterSpacing: '-0.02em',
      margin: '18px 0 0'
    }
  }, "Concierge care, at any scale.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 22,
      marginTop: 52
    }
  }, perks.map(([ic, t, d], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: i * 70
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ivory)',
      borderRadius: 'var(--radius-xl)',
      padding: '30px 26px',
      height: '100%',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 28,
    color: "currentColor"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '1.25rem',
      color: 'var(--charcoal)',
      margin: '18px 0 10px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--slate-ink)',
      fontSize: '14px',
      lineHeight: 1.6,
      margin: 0
    }
  }, d))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ivory)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-800)',
      borderRadius: 'var(--radius-xl)',
      padding: 'clamp(44px,5vw,76px) clamp(28px,5vw,68px)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 40,
      alignItems: 'center',
      boxShadow: 'var(--shadow-lift)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d2)',
      color: 'var(--ivory)',
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, "Planning something? Let\u2019s tailor it."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ivory-a64)',
      fontSize: 'var(--fs-lg)',
      margin: '16px 0 0',
      maxWidth: '48ch'
    }
  }, "Tell us your group size, date, and location, and we\u2019ll build a custom quote.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: pillCE,
    onClick: onBook
  }, "Request Group Pricing"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+17138517590",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    fullWidth: true,
    style: pillCE,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 17,
      color: "currentColor"
    })
  }, "(713) 851-7590")))))));
}
window.CorporateEvents = CorporateEvents;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CorporateEvents.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DripMenu.jsx
try { (() => {
/* global React, Photo, Reveal */
const DSm = window.RapidRefreshDesignSystem_646e39;
function DripMenu({
  onNavigate
}) {
  const {
    Button,
    Icon,
    SectionLabel,
    DripRow,
    BoosterRow,
    Chip
  } = DSm;
  const [filter, setFilter] = React.useState('All');
  const signature = [['Essential Hydration', 'Hydration & Electrolytes', 169, 219, 'droplet', 'Hydration', false], ['Energy Reset', 'Energy & Mental Clarity', 189, 239, 'zap', 'Energy', false], ['RapidRefresh Defense', 'Immune Support', 199, 249, 'shield-check', 'Immunity', false], ["Myers' Cocktail", 'Overall Wellness', 199, 259, 'flask-conical', 'Wellness', false], ['Game Day Drip™', 'Performance & Recovery', 219, 279, 'activity', 'Recovery', true], ['Glass Skin Drip', 'Beauty & Skin Health', 239, 319, 'sparkles', 'Beauty', true], ['Morning After Rescue™', 'Hangover Recovery', 249, 329, 'sunrise', 'Recovery', true], ['NAD+ Renewal', 'Cellular Energy & Longevity', 349, 449, 'atom', 'Wellness', true]];
  const cats = ['All', 'Hydration', 'Energy', 'Immunity', 'Recovery', 'Beauty', 'Wellness'];
  const shown = signature.filter(d => filter === 'All' || d[5] === filter);
  const injections = [['Vitamin B12', 'Energy & B12 Support', 45], ['MIC Lipotropic', 'Metabolism Support', 45], ['Biotin', 'Hair, Skin & Nails', 45], ['Vitamin D3', 'Bone & Immune Health', 50]];
  const boosters = [['Vitamin C', 'Immune Support', 40], ['Vitamin B Complex', 'Energy Support', 30], ['Vitamin B12', 'Energy & Focus', 45], ['Glutathione', 'Antioxidant Support', 65], ['Biotin', 'Hair, Skin & Nails', 45], ['Zinc', 'Immune Health', 30], ['Magnesium', 'Muscle Recovery', 35], ['L-Carnitine', 'Fat Metabolism & Energy', 50]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-900)',
      padding: 'clamp(56px,6vw,96px) var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Luxury Concierge IV Menu"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d1)',
      color: 'var(--ivory)',
      letterSpacing: '-0.02em',
      margin: '20px 0 0',
      maxWidth: '20ch'
    }
  }, "Signature drips, priced two ways: Standard and Premium."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      margin: '40px 0 8px'
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c,
    selected: filter === c,
    onClick: () => setFilter(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 'var(--section-y-tight)'
    }
  }, shown.map(([n, b, s, p, ic,, sig]) => /*#__PURE__*/React.createElement(DripRow, {
    key: n,
    name: n,
    bestFor: b,
    standard: s,
    premium: p,
    icon: ic,
    signature: sig
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-800)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Wellness Injections"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d2)',
      color: 'var(--ivory)',
      letterSpacing: '-0.02em',
      margin: '16px 0 32px'
    }
  }, "Add-on injections"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 14
    }
  }, injections.map(([n, b, p]) => /*#__PURE__*/React.createElement(BoosterRow, {
    key: n,
    name: n,
    bestFor: b,
    price: p
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--gold-a40)',
      margin: '56px 0'
    }
  }), /*#__PURE__*/React.createElement(SectionLabel, null, "IV Boosters"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d2)',
      color: 'var(--ivory)',
      letterSpacing: '-0.02em',
      margin: '16px 0 32px'
    }
  }, "Vitamins, antioxidants & aminos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 14
    }
  }, boosters.map(([n, b, p]) => /*#__PURE__*/React.createElement(BoosterRow, {
    key: n,
    name: n,
    bestFor: b,
    price: p
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ivory)',
      padding: 'var(--section-y-tight) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-text)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d2)',
      color: 'var(--charcoal)',
      letterSpacing: '-0.02em'
    }
  }, "Not sure which drip is right?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--slate-ink)',
      fontSize: 'var(--fs-lg)',
      margin: '16px auto 30px',
      maxWidth: '46ch'
    }
  }, "Book a consultation and Rahab will tailor a drip to your goals."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate('booking')
  }, "Book Your Drip"))));
}
window.DripMenu = DripMenu;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DripMenu.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FAQ.jsx
try { (() => {
/* global React, Reveal */
const DSfaq = window.RapidRefreshDesignSystem_646e39;
const pillFaq = {
  borderRadius: 'var(--radius-pill)'
};
function FaqItem({
  q,
  a,
  open,
  onToggle
}) {
  const {
    Icon
  } = DSfaq;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--ivory-300)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    style: {
      width: '100%',
      textAlign: 'left',
      background: 'none',
      border: 0,
      cursor: 'pointer',
      padding: '24px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-h4)',
      color: 'var(--charcoal)',
      letterSpacing: '-0.01em'
    }
  }, q), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: open ? 'var(--gold-fill)' : 'var(--ivory-100)',
      color: open ? 'var(--navy-900)' : 'var(--gold-600)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? 'minus' : 'plus',
    size: 18,
    color: "currentColor"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: open ? 320 : 0,
      overflow: 'hidden',
      transition: 'max-height var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--slate-ink)',
      fontSize: '16px',
      lineHeight: 1.7,
      margin: '0 0 24px',
      maxWidth: '68ch'
    }
  }, a)));
}
function FAQ({
  onNavigate,
  onBook
}) {
  const {
    Button,
    Icon,
    SectionLabel
  } = DSfaq;
  const [open, setOpen] = React.useState(0);
  const faqs = [['Who administers the IV therapy?', 'Every visit is led by Rahab Njuguna, a registered nurse with over 22 years of acute-care experience. All treatments are RN-administered to clinical standards.'], ['Where do you provide service?', 'We serve Houston and surrounding communities, including Sugar Land, Katy, The Woodlands, Pearland, Missouri City, Alvin, Manvel, and Fresno. Concierge travel is included within our core service area.'], ['How do I book an appointment?', 'Request an appointment through our online intake form, book instantly on our JaneApp scheduler, or call us at (713) 851-7590. Same-day appointments are available when scheduling allows.'], ['What should I expect during a visit?', 'Your nurse arrives with everything needed, reviews your intake and consent, and administers your drip in comfort. Most sessions take 30–60 minutes depending on the drip and boosters selected.'], ['Is it safe? Are you insured?', 'Yes. RapidRefresh is a fully insured mobile practice delivering evidence-based, medical-grade therapy. Your health intake is reviewed before every treatment to ensure it’s appropriate for you.'], ['How is my information handled?', 'Our intake and consent forms are HIPAA-conscious. Your personal and health information is collected securely and used only to provide safe, appropriate care.'], ['What is your cancellation policy?', 'Plans change, and we ask for reasonable notice so we can offer the slot to another client. Specific terms are shared at the time of booking.'], ['Do you offer memberships and gift cards?', 'Yes. The Wellness Club offers monthly drips and member pricing from $179/month, and digital gift cards are available in any amount and never expire.']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-900)',
      padding: 'clamp(56px,6vw,96px) var(--gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-text)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    align: "center"
  }, "Questions & Answers")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d1)',
      color: 'var(--ivory)',
      letterSpacing: '-0.02em',
      margin: '20px auto 0',
      maxWidth: '18ch'
    }
  }, "Everything you might be wondering."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ivory)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '860px',
      margin: '0 auto'
    }
  }, faqs.map(([q, a], i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: q,
    q: q,
    a: a,
    open: open === i,
    onToggle: () => setOpen(open === i ? -1 : i)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d2)',
      color: 'var(--charcoal)',
      letterSpacing: '-0.02em'
    }
  }, "Still have a question?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--slate-ink)',
      fontSize: 'var(--fs-lg)',
      margin: '14px auto 28px',
      maxWidth: '42ch'
    }
  }, "We\u2019re happy to help you choose the right drip or plan a visit."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: pillFaq,
    onClick: onBook
  }, "Book Your Drip"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+17138517590",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: pillFaq,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 17,
      color: "currentColor"
    })
  }, "(713) 851-7590")))))));
}
window.FAQ = FAQ;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FAQ.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GiftCards.jsx
try { (() => {
/* global React, Photo, Reveal */
const DSgc = window.RapidRefreshDesignSystem_646e39;
const pillGc = {
  borderRadius: 'var(--radius-pill)'
};
function GiftCards({
  onNavigate,
  onBook
}) {
  const {
    Button,
    Icon,
    SectionLabel
  } = DSgc;
  const [amount, setAmount] = React.useState(250);
  const amounts = [100, 150, 250, 500];
  const steps = [['gift', 'Choose an amount', 'Pick a preset or enter a custom value, any amount works.'], ['mail', 'Personalize & send', 'Add a note and we’ll deliver a beautiful digital card by email.'], ['calendar-check', 'They book', 'Your recipient redeems it toward any drip, injection, or membership.']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-900)',
      padding: 'clamp(56px,6vw,104px) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 'clamp(32px,5vw,72px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Gift Cards"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d1)',
      color: 'var(--ivory)',
      letterSpacing: '-0.02em',
      margin: '20px 0 0',
      maxWidth: '18ch'
    }
  }, "Give the gift of feeling exceptional."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ivory-a80)',
      fontSize: 'var(--fs-lg)',
      lineHeight: 1.6,
      margin: '22px 0 0',
      maxWidth: '50ch'
    }
  }, "A RapidRefresh gift card is wellness they\u2019ll actually use: concierge IV therapy delivered wherever they are."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      margin: '34px 0 0'
    }
  }, amounts.map(a => /*#__PURE__*/React.createElement("button", {
    key: a,
    onClick: () => setAmount(a),
    style: {
      cursor: 'pointer',
      padding: '14px 24px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '1.25rem',
      background: amount === a ? 'var(--gold-fill)' : 'transparent',
      color: amount === a ? 'var(--navy-900)' : 'var(--ivory)',
      border: `1px solid ${amount === a ? 'transparent' : 'var(--gold-a40)'}`,
      boxShadow: amount === a ? 'var(--shadow-gold)' : 'none',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, "$", a)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      color: 'var(--ivory-a44)',
      fontSize: '13px',
      paddingLeft: 6
    }
  }, "or a custom amount")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 34,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: pillGc,
    onClick: onBook
  }, "Send a $", amount, " Card"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: pillGc,
    onClick: () => onNavigate('menu')
  }, "See What It Covers"))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: 'var(--navy-700)',
      border: '1px solid var(--gold-a40)',
      boxShadow: 'var(--shadow-lift)',
      aspectRatio: '1.6 / 1',
      padding: 'clamp(24px,3vw,38px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '1.4rem',
      color: 'var(--ivory)'
    }
  }, "RapidRefresh"), /*#__PURE__*/React.createElement(Icon, {
    name: "droplet",
    size: 30,
    color: "var(--gold-400)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: '11px',
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)'
    }
  }, "Digital Gift Card"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'clamp(2.5rem,6vw,4rem)',
      color: 'var(--ivory)',
      letterSpacing: '-0.02em',
      lineHeight: 1
    }
  }, "$", amount)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ivory)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "onLight",
    align: "center"
  }, "How Gifting Works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d1)',
      color: 'var(--charcoal)',
      letterSpacing: '-0.02em',
      margin: '18px 0 0'
    }
  }, "Thoughtful in three steps.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24,
      marginTop: 52
    }
  }, steps.map(([ic, t, d], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ivory-100)',
      borderRadius: 'var(--radius-xl)',
      padding: '32px 28px',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 54,
      height: 54,
      borderRadius: '50%',
      background: 'var(--ivory)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--gold-600)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 26,
    color: "currentColor"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '1.3rem',
      color: 'var(--charcoal)',
      margin: '18px 0 10px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--slate-ink)',
      fontSize: '14.5px',
      lineHeight: 1.6,
      margin: 0
    }
  }, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--slate-ink)',
      fontSize: '14px',
      margin: '0 0 20px'
    }
  }, "Gift cards never expire and can be applied to any service, booster, or membership."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: pillGc,
    onClick: onBook
  }, "Send a Gift Card")))));
}
window.GiftCards = GiftCards;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GiftCards.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
/* global React, Photo, Reveal */
const DSh = window.RapidRefreshDesignSystem_646e39;

// pill CTA style
const pill = {
  borderRadius: 'var(--radius-pill)'
};
function CatCard({
  icon,
  tint,
  img,
  name,
  blurb,
  onClick
}) {
  const {
    Icon
  } = DSh;
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      textAlign: 'left',
      border: 0,
      cursor: 'pointer',
      padding: 0,
      background: 'var(--ivory)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lift)',
      display: 'flex',
      flexDirection: 'column',
      transform: h ? 'translateY(-6px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 168,
      background: tint,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, img ? /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: name,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: h ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }) : /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 54,
    strokeWidth: 1.2,
    color: "var(--navy-700)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '1.25rem',
      color: 'var(--charcoal)',
      letterSpacing: '-0.01em'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)',
      transform: h ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 20,
    color: "currentColor"
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: '13.5px',
      color: 'var(--slate-ink)',
      lineHeight: 1.5
    }
  }, blurb)));
}
function DripCard({
  icon,
  tint,
  img,
  name,
  bestFor,
  price,
  onClick
}) {
  const {
    Icon
  } = DSh;
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      textAlign: 'left',
      border: '1px solid var(--ivory-300)',
      cursor: 'pointer',
      padding: 0,
      background: 'var(--ivory)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: h ? 'var(--shadow-lift)' : 'none',
      borderColor: h ? 'var(--gold-a40)' : 'var(--ivory-300)',
      transition: 'box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 156,
      background: tint,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: h ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 134,
      left: 16,
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--ivory)',
      boxShadow: 'var(--shadow-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--gold-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22,
    color: "currentColor"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '30px 20px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '1.15rem',
      color: 'var(--charcoal)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--slate-ink)',
      margin: '4px 0 14px'
    }
  }, bestFor), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      color: 'var(--slate-ink)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, "From"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '1.5rem',
      color: 'var(--gold-600)'
    }
  }, "$", price))));
}
function Home({
  onNavigate,
  onBook
}) {
  const {
    Button,
    Icon,
    SectionLabel,
    Stat
  } = DSh;
  const Collage = window.Collage;
  const cats = [['droplet', 'var(--ivory-100)', 'Hydration', 'Replenish fluids and restore balance fast.', '../../assets/photos/cat-hydration.webp'], ['activity', 'var(--gold-a16)', 'Recovery', 'Bounce back after training, travel, or a big night.', '../../assets/photos/cat-recovery.webp'], ['shield-check', 'rgba(38,50,85,0.10)', 'Immunity', 'Support your defenses with medical-grade nutrients.', '../../assets/photos/cat-immunity.webp'], ['sparkles', 'var(--ivory-200)', 'Beauty', 'Glow from within with skin, hair & nail support.', '../../assets/photos/cat-beauty.webp']];
  const marquee = [['user-round-check', 'RN-Led Concierge Care'], ['clock', 'Same-Day Appointments'], ['lock', 'HIPAA-Conscious'], ['shield', 'Fully Insured'], ['flask-conical', 'Medical-Grade']];
  const why = [['stethoscope', 'RN-Led, 22+ Years', 'Every visit is led by a registered nurse with over two decades of acute-care experience.'], ['car-front', 'We Come To You', 'Concierge mobile service to your home, office, gym, or hotel, on your schedule.'], ['flask-conical', 'Medical-Grade', 'High-quality vitamins and medications, dosed and administered to clinical standards.'], ['sliders-horizontal', 'Built Around You', 'Drips customized to your goals: recovery, energy, immunity, beauty, or hydration.']];
  const whyImg = ['../../assets/photos/why-rn.webp', '../../assets/photos/why-mobile.webp', '../../assets/photos/why-grade.webp', '../../assets/photos/why-custom.webp'];
  const steps = [['smartphone', 'Request', 'Choose your drip, location, and time online or by phone.', '../../assets/photos/step-request.webp'], ['clipboard-list', 'Intake & Consent', 'Complete a quick, HIPAA-conscious health intake.', '../../assets/photos/step-intake.webp'], ['car-front', 'We Arrive', 'Your RN arrives on schedule and delivers your drip in comfort.', '../../assets/photos/step-arrive.webp']];
  const drips = [['droplet', 'var(--ivory-100)', 'Essential Hydration', 'Hydration & Electrolytes', 169, '../../assets/photos/drip-hydration.webp'], ['zap', 'var(--gold-a16)', 'Energy Reset', 'Energy & Mental Clarity', 189, '../../assets/photos/drip-energy.webp'], ['activity', 'rgba(38,50,85,0.10)', 'Game Day Drip™', 'Performance & Recovery', 219, '../../assets/photos/drip-gameday.webp'], ['sunrise', 'var(--ivory-200)', 'Morning After Rescue™', 'Hangover Recovery', 249, '../../assets/photos/drip-rescue.webp']];
  const serve = ['Athletes & High Performers', 'Corporate Professionals', 'Post-Travel Recovery', 'Event & Bridal Parties', 'Everyday Wellness'];
  const testimonials = [['The nurse was professional and the whole experience felt genuinely luxurious. I booked before a half-marathon and recovered in record time.', 'Danielle R.', 'Katy, TX'], ['On-time, spotless, and so calming. It’s the only way I’ll do IV therapy now, right in my living room.', 'Marcus T.', 'The Woodlands, TX'], ['We booked the whole bridal party. Everyone glowed for the photos. Absolutely worth it.', 'Priya S.', 'Sugar Land, TX']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("style", null, `@keyframes rr-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-900)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/hero.webp",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 30%',
      opacity: 0.16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(7,18,51,0.72) 0%, rgba(7,18,51,0.34) 42%, rgba(7,18,51,1) 88%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'clamp(60px,8vw,116px) var(--gutter) 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    align: "center"
  }, "RN-Led Mobile IV \xB7 Houston")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-hero)',
      lineHeight: 1.0,
      letterSpacing: '-0.025em',
      color: 'var(--ivory)',
      margin: '24px auto 0',
      maxWidth: '15ch'
    }
  }, "Premium Mobile IV Hydration in Houston, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-400)'
    }
  }, "and beyond.")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ivory-a80)',
      fontSize: 'var(--fs-lg)',
      lineHeight: 1.6,
      margin: '24px auto 0',
      maxWidth: '52ch'
    }
  }, "Expert IV therapy and wellness, delivered to your home, office, gym, or hotel, designed for comfort, safety, and results."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      marginTop: 34,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: pill,
    onClick: onBook
  }, "Book Your Drip"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: pill,
    onClick: () => onNavigate('menu')
  }, "View the Drip Menu")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20,
      margin: '64px 0 -84px',
      position: 'relative',
      zIndex: 3
    }
  }, cats.map(([ic, tint, n, b, img], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: n,
    delay: i * 70
  }, /*#__PURE__*/React.createElement(CatCard, {
    icon: ic,
    tint: tint,
    img: img,
    name: n,
    blurb: b,
    onClick: () => onNavigate('menu')
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ivory)',
      borderTopLeftRadius: 44,
      borderTopRightRadius: 44,
      marginTop: -1,
      paddingTop: 128,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--ivory-200)',
      borderBottom: '1px solid var(--ivory-200)',
      padding: '20px 0',
      overflow: 'hidden',
      maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
      WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56,
      width: 'max-content',
      animation: 'rr-marquee 26s linear infinite'
    }
  }, [...marquee, ...marquee, ...marquee, ...marquee].map(([ic, t], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--slate-ink)',
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    color: "var(--gold-600)"
  }), " ", t))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ivory)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "onLight"
  }, "Why RapidRefresh"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d1)',
      color: 'var(--charcoal)',
      letterSpacing: '-0.02em',
      margin: '18px 0 0',
      maxWidth: '18ch'
    }
  }, "Hospital-level care, concierge-level comfort.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 22,
      marginTop: 52
    }
  }, why.map(([ic, t, d], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: i * 70
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--ivory-100)',
      borderRadius: 'var(--radius-xl)',
      height: '100%',
      minHeight: 322
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 150
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: whyImg[i],
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '62%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'right top',
      WebkitMaskImage: 'linear-gradient(to bottom left, #000 30%, transparent 82%)',
      maskImage: 'linear-gradient(to bottom left, #000 30%, transparent 82%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 28,
      left: 26,
      width: 54,
      height: 54,
      borderRadius: '50%',
      background: 'var(--ivory)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--gold-600)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 26,
    color: "currentColor"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 26px 30px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '1.3rem',
      color: 'var(--charcoal)',
      margin: '0 0 10px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--slate-ink)',
      fontSize: '14.5px',
      lineHeight: 1.6,
      margin: 0
    }
  }, d)))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ivory-100)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "onLight",
    align: "center"
  }, "How It Works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d1)',
      color: 'var(--charcoal)',
      letterSpacing: '-0.02em',
      margin: '18px 0 0'
    }
  }, "Three steps to feeling your best.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 26,
      marginTop: 56
    }
  }, steps.map(([ic, t, d, img], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: i * 90
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ivory)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 182,
      background: i % 2 ? 'var(--gold-a16)' : 'var(--ivory-200)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: t,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 28px 30px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--gold-600)'
    }
  }, "Step ", ['One', 'Two', 'Three'][i]), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '1.4rem',
      color: 'var(--charcoal)',
      margin: '10px 0 8px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--slate-ink)',
      fontSize: '14.5px',
      lineHeight: 1.6,
      margin: 0
    }
  }, d)))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ivory)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "onLight"
  }, "The Drip Menu"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d1)',
      color: 'var(--charcoal)',
      letterSpacing: '-0.02em',
      margin: '18px 0 0'
    }
  }, "Signature drips")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: pill,
    onClick: () => onNavigate('menu'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16,
      color: "currentColor"
    })
  }, "View Full Menu")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 22,
      marginTop: 48
    }
  }, drips.map(([ic, tint, n, b, p, img], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: n,
    delay: i * 70
  }, /*#__PURE__*/React.createElement(DripCard, {
    icon: ic,
    tint: tint,
    img: img,
    name: n,
    bestFor: b,
    price: p,
    onClick: () => onNavigate('menu')
  })))))), /*#__PURE__*/React.createElement(Collage, {
    bg: "var(--ivory-100)",
    eyebrow: "Boosters & Injections",
    accentWord: "Amplify",
    headlineRest: "every drip with a targeted boost.",
    mainCaption: "Booster vials \xB7 flat-lay",
    captionA: "Glutathione push",
    captionB: "B12 injection",
    mainSrc: "../../assets/photos/boosters-flatlay.webp",
    aSrc: "../../assets/photos/booster-glutathione.webp",
    bSrc: "../../assets/photos/booster-b12.webp",
    checklistTitle: "Most-added boosters",
    checklist: ['Glutathione for antioxidant glow', 'Vitamin B12 for energy & focus', 'Vitamin C for immune support', 'Biotin for hair, skin & nails', 'Magnesium for muscle recovery'],
    subhead: "Small additions, real difference",
    body: "Layer clinician-selected vitamins, antioxidants, and amino acids onto any drip, or book a quick wellness injection between visits.",
    ctaLabel: "View the Full Menu",
    onCta: () => onNavigate('menu')
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ivory)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(32px,5vw,72px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingBottom: 48,
      paddingRight: 48
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    src: "../../assets/photos/serve-athlete.webp",
    alt: "Athlete receiving IV therapy after training",
    ratio: "4 / 5",
    radius: "var(--radius-xl)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: '52%'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    src: "../../assets/photos/serve-athome.webp",
    alt: "Relaxing at home during an IV drip",
    ratio: "1 / 1",
    radius: "var(--radius-xl)",
    style: {
      border: '6px solid var(--ivory)'
    }
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "onLight"
  }, "Who We Serve"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d1)',
      color: 'var(--charcoal)',
      letterSpacing: '-0.02em',
      margin: '18px 0 26px',
      maxWidth: '16ch'
    }
  }, "Wellness, tailored to how you live."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, serve.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: s,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '16px 0',
      borderBottom: i < serve.length - 1 ? '1px solid var(--ivory-300)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      flex: '0 0 auto',
      borderRadius: '50%',
      background: 'var(--gold-a16)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--gold-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: "currentColor"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '1.3rem',
      color: 'var(--charcoal)'
    }
  }, s))))))), /*#__PURE__*/React.createElement(Collage, {
    bg: "var(--ivory-100)",
    flip: true,
    eyebrow: "Corporate & Events",
    accentWord: "Wellness",
    headlineRest: "that travels to your team.",
    mainCaption: "Corporate wellness day",
    captionA: "Bridal party",
    captionB: "On-site setup",
    mainSrc: "../../assets/photos/corporate-day.webp",
    aSrc: "../../assets/photos/event-bridal.webp",
    bSrc: "../../assets/photos/corporate-setup.webp",
    checklistTitle: "Perfect for",
    checklist: ['Corporate offices & HQs', 'Conferences & summits', 'Bridal & bachelorette parties', 'Fitness competitions', 'Wellness days & retreats'],
    subhead: "Custom group pricing",
    body: "From boardrooms to bridal suites, we arrive on-site and tailor drips to your group size, timing, and goals.",
    ctaLabel: "Explore Corporate & Events",
    onCta: () => onNavigate('corporate')
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ivory)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: 'clamp(32px,5vw,72px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Photo, {
    src: "../../assets/photos/Founder Waist Upwards.webp",
    alt: "Rahab Njuguna, RN",
    ratio: "3 / 4",
    radius: "var(--radius-xl)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "onLight"
  }, "Meet Your Nurse"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: '22px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d2)',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      color: 'var(--charcoal)'
    }
  }, "\u201CI founded RapidRefresh to combine hospital-level clinical expertise with the comfort of luxury concierge care.\u201D"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--slate-ink)',
      fontSize: '16px',
      lineHeight: 1.7,
      margin: '24px 0 0',
      maxWidth: '52ch'
    }
  }, "With over 22 years of acute-care nursing experience, Rahab delivers safe, personalized IV hydration and wellness that helps you look, feel, and perform at your best."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    tone: "onLight",
    value: "22+",
    label: "Years Acute-Care Experience"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "onLight",
    value: "100%",
    label: "RN-Led Concierge Visits"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: pill,
    onClick: () => onNavigate('about')
  }, "Read Rahab\u2019s Story"))))), /*#__PURE__*/React.createElement(Collage, {
    bg: "var(--ivory-100)",
    eyebrow: "The Wellness Club",
    accentWord: "Membership",
    headlineRest: "made effortless.",
    mainCaption: "Concierge member kit",
    captionA: "Monthly drip",
    captionB: "B12 boost",
    mainSrc: "../../assets/photos/member-kit.webp",
    aSrc: "../../assets/photos/member-drip.webp",
    bSrc: "../../assets/photos/member-b12.webp",
    checklistTitle: "Members enjoy",
    checklist: ['Monthly IV therapy sessions', 'Exclusive member pricing', 'Priority scheduling', 'Complimentary travel', 'A monthly B12 boost'],
    subhead: "From $179 / month",
    body: "Make wellness a habit, not an afterthought, with monthly drips, boosters, and concierge perks all year long.",
    ctaLabel: "Explore Memberships",
    onCta: () => onNavigate('memberships')
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ivory)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "onLight",
    align: "center"
  }, "Loved Across Houston"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d1)',
      color: 'var(--charcoal)',
      letterSpacing: '-0.02em',
      margin: '18px 0 0'
    }
  }, "What clients say")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24,
      marginTop: 52
    }
  }, testimonials.map(([q, n, loc], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: n,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ivory)',
      borderRadius: 'var(--radius-xl)',
      padding: '32px 30px',
      boxShadow: 'var(--shadow-sm)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3,
      color: 'var(--gold-500)'
    }
  }, [0, 1, 2, 3, 4].map(s => /*#__PURE__*/React.createElement(Icon, {
    key: s,
    name: "star",
    size: 16,
    color: "currentColor"
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: '1.2rem',
      lineHeight: 1.45,
      color: 'var(--charcoal)',
      margin: 0,
      flex: 1
    }
  }, "\u201C", q, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      borderTop: '1px solid var(--ivory-200)',
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      background: 'var(--gold-a16)',
      color: 'var(--gold-600)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 500
    }
  }, n[0]), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontWeight: 600,
      fontSize: '14px',
      color: 'var(--charcoal)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12.5px',
      color: 'var(--slate-ink)'
    }
  }, loc))))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ivory-100)',
      padding: 'var(--section-y-tight) var(--gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap',
      marginBottom: 34
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "onLight"
  }, "On Instagram"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d2)',
      color: 'var(--charcoal)',
      letterSpacing: '-0.02em',
      margin: '16px 0 0'
    }
  }, "@rapidrefreshivtherapy")), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/rapidrefreshivtherapy/",
    target: "_blank",
    rel: "noopener",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      color: 'var(--gold-600)',
      fontWeight: 600,
      fontSize: '14px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "at-sign",
    size: 18,
    color: "currentColor"
  }), " Follow along")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 14
    }
  }, ['InstaInspo.webp', 'member-drip.webp', 'boosters-flatlay.webp', 'event-bridal.webp', 'cat-beauty.webp', 'serve-athome.webp'].map((f, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: f,
    delay: i * 50
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1 / 1',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--ivory-200)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: '../../assets/photos/' + f,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ivory)',
      padding: '0 var(--gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-800)',
      borderRadius: 'var(--radius-xl)',
      padding: 'clamp(48px,6vw,84px) clamp(28px,5vw,72px)',
      textAlign: 'center',
      boxShadow: 'var(--shadow-lift)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d1)',
      color: 'var(--ivory)',
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, "Ready to feel your best?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ivory-a64)',
      fontSize: 'var(--fs-lg)',
      margin: '18px auto 0',
      maxWidth: '44ch'
    }
  }, "Book a concierge IV session, or join the Wellness Club for member pricing all year."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      marginTop: 34,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: pill,
    onClick: onBook
  }, "Book Your Drip"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: pill,
    onClick: () => onNavigate('memberships'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18,
      color: "currentColor"
    })
  }, "Explore Memberships"))))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Memberships.jsx
try { (() => {
/* global React, Reveal */
const DSmem = window.RapidRefreshDesignSystem_646e39;
function Memberships({
  onNavigate
}) {
  const {
    Button,
    Icon,
    SectionLabel,
    MembershipCard
  } = DSmem;
  const tiers = [['Essential Hydration Premium', 179, 'Consistent monthly hydration to keep you feeling your best.', ['1 IV Therapy Session Monthly', 'Monthly Vitamin B12 Injection', '10% Off Additional IVs', 'Priority Scheduling', 'Exclusive Member Pricing'], 'Become a Member', false], ['Performance Plus', 329, 'For the consistently active and high-performing.', ['2 Premium IV Drips Monthly', 'Performance Booster Every Visit', 'High-Dose Vitamin B12', 'Priority Booking', 'Complimentary Travel (within service area)'], 'Join Performance Plus', true], ['Elite Concierge', 599, 'White-glove wellness, prioritized all year.', ['4 Premium IV Drips Monthly', 'Monthly Glutathione Push', 'Unlimited Boosters on Member Visits', 'VIP Concierge Scheduling', 'Premium Travel Included', 'Quarterly Guest Pass'], 'Become Elite', false]];
  const love = ['Save hundreds every year', 'Consistent hydration & wellness', 'Priority appointments', 'Concierge to home, office, or hotel', 'Exclusive member-only pricing'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-900)',
      padding: 'clamp(56px,6vw,96px) var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    align: "center"
  }, "The Wellness Club")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d1)',
      color: 'var(--ivory)',
      letterSpacing: '-0.02em',
      margin: '20px auto 0',
      maxWidth: '20ch'
    }
  }, "Make wellness part of your lifestyle."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ivory-a64)',
      fontSize: 'var(--fs-lg)',
      margin: '18px auto 0',
      maxWidth: '52ch'
    }
  }, "Monthly IV therapy, exclusive savings, and concierge-level care, designed to keep you feeling your best.")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '56px 0 var(--section-y)',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24,
      alignItems: 'stretch'
    }
  }, tiers.map(([n, p, tag, feats, cta, feat], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: n,
    delay: i * 80,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(MembershipCard, {
    name: n,
    price: p,
    tagline: tag,
    features: feats,
    cta: cta,
    featured: feat,
    onSelect: () => onNavigate('booking'),
    style: {
      width: '100%'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 0 var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap',
      padding: '24px 30px',
      background: 'var(--navy-800)',
      border: '1px solid var(--gold-a40)',
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 50,
      height: 50,
      flex: '0 0 auto',
      borderRadius: '50%',
      background: 'var(--gold-a16)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--gold-400)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "syringe",
    size: 22,
    color: "currentColor"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '1.3rem',
      color: 'var(--ivory)'
    }
  }, "B12 Energy Boost Package"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ivory-a64)',
      fontSize: '14px',
      marginTop: 3
    }
  }, "A weekly Vitamin B12 injection, four per month, to keep your energy steady."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: '2rem',
      color: 'var(--gold-400)'
    }
  }, "$155"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ivory-a64)',
      fontSize: '14px'
    }
  }, "/ month"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ivory)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(32px,5vw,72px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "onLight"
  }, "Why Members Love It"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d1)',
      color: 'var(--charcoal)',
      letterSpacing: '-0.02em',
      margin: '18px 0 0',
      maxWidth: '16ch'
    }
  }, "The smarter way to stay well.")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, love.map((l, i) => /*#__PURE__*/React.createElement("li", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '18px 0',
      borderBottom: i < love.length - 1 ? '1px solid var(--ivory-300)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 20,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '17px',
      color: 'var(--charcoal)',
      fontWeight: 500
    }
  }, l)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-800)',
      padding: 'var(--section-y-tight) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-text)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d1)',
      color: 'var(--ivory)',
      letterSpacing: '-0.02em'
    }
  }, "Join the Wellness Club"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ivory-a64)',
      fontSize: 'var(--fs-lg)',
      margin: '16px auto 30px',
      maxWidth: '42ch'
    }
  }, "Premium IV therapy with exclusive member benefits, all year long."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate('booking')
  }, "Become a Member"))));
}
window.Memberships = Memberships;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Memberships.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pricing.jsx
try { (() => {
/* global React, Reveal */
const DSpr = window.RapidRefreshDesignSystem_646e39;
const pillPr = {
  borderRadius: 'var(--radius-pill)'
};
function Pricing({
  onNavigate,
  onBook
}) {
  const {
    Button,
    Icon,
    SectionLabel,
    DripRow,
    BoosterRow
  } = DSpr;
  const drips = [['Essential Hydration', 'Hydration & Electrolytes', 169, 219, 'droplet', false], ['Energy Reset', 'Energy & Mental Clarity', 189, 239, 'zap', false], ['RapidRefresh Defense', 'Immune Support', 199, 249, 'shield-check', false], ["Myers' Cocktail", 'Overall Wellness', 199, 259, 'flask-conical', false], ['Game Day Drip™', 'Performance & Recovery', 219, 279, 'activity', true], ['Glass Skin Drip', 'Beauty & Skin Health', 239, 319, 'sparkles', true], ['Morning After Rescue™', 'Hangover Recovery', 249, 329, 'sunrise', true], ['NAD+ Renewal', 'Cellular Energy & Longevity', 349, 449, 'atom', true]];
  const groups = [['Wellness Injections', [['Vitamin B12 Injection', 'Energy & B12 Support', 45], ['MIC Lipotropic Injection', 'Metabolism Support', 45], ['Biotin Injection', 'Hair, Skin & Nails', 45], ['Vitamin D3 Injection', 'Bone & Immune Health', 50]]], ['Vitamin & Antioxidant Boosters', [['Vitamin C', 'Immune Support', 40], ['Vitamin B Complex', 'Energy Support', 30], ['Vitamin B12', 'Energy & Focus', 45], ['Glutathione', 'Antioxidant Support', 65], ['Biotin', 'Hair, Skin & Nails', 45], ['Zinc', 'Immune Health', 30]]], ['Recovery & Performance', [['Magnesium', 'Muscle Recovery', 35], ['Calcium', 'Bone & Muscle Support', 35], ['L-Carnitine', 'Fat Metabolism & Energy', 50], ['L-Arginine', 'Blood Flow & Performance', 45], ['Taurine', 'Hydration & Recovery', 45]]], ['Comfort Add-Ons', [['Ondansetron (Zofran)', 'Nausea Relief', 35], ['Famotidine (Pepcid)', 'GI Support', 35], ['Ketorolac (Toradol)', 'Pain Relief', 40]]]];
  const memberships = [['Essential Hydration Premium', 179], ['Performance Plus', 329], ['Elite Concierge', 599], ['B12 Energy Boost Package', 155]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-900)',
      padding: 'clamp(56px,6vw,96px) var(--gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Transparent Pricing"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d1)',
      color: 'var(--ivory)',
      letterSpacing: '-0.02em',
      margin: '20px 0 0',
      maxWidth: '20ch'
    }
  }, "Every drip, two ways: Standard and Premium."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ivory-a80)',
      fontSize: 'var(--fs-lg)',
      lineHeight: 1.6,
      margin: '20px 0 40px',
      maxWidth: '54ch'
    }
  }, "Standard delivers a clinically effective dose; Premium adds a higher concentration and complimentary booster. No hidden fees, and concierge travel is included in our core service area."), drips.map(([n, b, s, p, ic, sig]) => /*#__PURE__*/React.createElement(DripRow, {
    key: n,
    name: n,
    bestFor: b,
    standard: s,
    premium: p,
    icon: ic,
    signature: sig,
    onSelect: onBook
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ivory)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--section-y-tight)'
    }
  }, groups.map(([title, rows]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "onLight"
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 14,
      marginTop: 24
    }
  }, rows.map(([n, b, p]) => /*#__PURE__*/React.createElement(BoosterRow, {
    key: n,
    name: n,
    bestFor: b,
    price: p,
    tone: "onLight"
  }))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ivory-100)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "onLight"
  }, "Membership Pricing"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d2)',
      color: 'var(--charcoal)',
      letterSpacing: '-0.02em',
      margin: '16px 0 0'
    }
  }, "The Wellness Club")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: pillPr,
    onClick: () => onNavigate('memberships'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16,
      color: "currentColor"
    })
  }, "Compare Tiers")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20,
      marginTop: 36
    }
  }, memberships.map(([n, p]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      background: 'var(--ivory)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--ivory-300)',
      padding: '28px 26px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--gold-600)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: '2.25rem',
      color: 'var(--charcoal)'
    }
  }, "$", p, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.9rem',
      color: 'var(--slate-ink)'
    }
  }, " / month"))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ivory)',
      padding: '0 var(--gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-text)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d2)',
      color: 'var(--charcoal)',
      letterSpacing: '-0.02em'
    }
  }, "Ready when you are."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--slate-ink)',
      fontSize: 'var(--fs-lg)',
      margin: '16px auto 30px',
      maxWidth: '44ch'
    }
  }, "Prices shown are per session. Group and event pricing is quoted separately."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: pillPr,
    onClick: onBook
  }, "Book Your Drip"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: pillPr,
    onClick: () => onNavigate('corporate')
  }, "Corporate & Events")))));
}
window.Pricing = Pricing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiceArea.jsx
try { (() => {
/* global React, Photo, Reveal */
const DSsa = window.RapidRefreshDesignSystem_646e39;
const pillSA = {
  borderRadius: 'var(--radius-pill)'
};
function ServiceArea({
  onNavigate,
  onBook
}) {
  const {
    Button,
    Icon,
    SectionLabel
  } = DSsa;
  const areas = ['Houston', 'Sugar Land', 'Katy', 'The Woodlands', 'Pearland', 'Missouri City', 'Alvin', 'Manvel', 'Fresno'];
  const notes = [['navigation', 'Concierge Travel Included', 'Complimentary travel within our core service area; a modest fee may apply to outer requests.'], ['clock', 'Same-Day When Available', 'Book early in the day for the best chance at a same-day concierge visit.'], ['map-pin', 'Beyond the Map?', 'Just outside the area? Reach out and we regularly accommodate nearby requests.']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-900)',
      padding: 'clamp(56px,6vw,96px) var(--gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Service Area"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d1)',
      color: 'var(--ivory)',
      letterSpacing: '-0.02em',
      margin: '20px 0 0',
      maxWidth: '20ch'
    }
  }, "Mobile IV therapy across Greater Houston."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ivory-a80)',
      fontSize: 'var(--fs-lg)',
      lineHeight: 1.6,
      margin: '20px 0 0',
      maxWidth: '52ch'
    }
  }, "We bring the drip to you at home, office, gym, or hotel, throughout Houston and the surrounding communities."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.35fr 0.65fr',
      gap: 'clamp(24px,4vw,44px)',
      marginTop: 48,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      border: '1px solid var(--navy-300)',
      boxShadow: 'var(--shadow-lift)',
      height: '100%',
      minHeight: 420
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "RapidRefresh service area, Greater Houston",
    src: "https://www.google.com/maps?q=Houston,+Texas&output=embed",
    style: {
      width: '100%',
      height: '100%',
      minHeight: 420,
      border: 0,
      filter: 'grayscale(0.3) contrast(1.05)'
    },
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-800)',
      border: '1px solid var(--navy-300)',
      borderRadius: 'var(--radius-xl)',
      padding: '30px 30px 34px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '1.375rem',
      color: 'var(--ivory)',
      margin: '0 0 20px'
    }
  }, "Communities we serve"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, areas.map(a => /*#__PURE__*/React.createElement("span", {
    key: a,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '9px 14px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--navy-400)',
      border: '1px solid var(--navy-300)',
      color: 'var(--ivory-a80)',
      fontSize: '13.5px',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14,
    color: "var(--gold-400)"
  }), " ", a))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    style: pillSA,
    onClick: onBook
  }, "Book Your Drip")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ivory)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, notes.map(([ic, t, d], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: i * 70
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ivory-100)',
      borderRadius: 'var(--radius-xl)',
      padding: '30px 28px',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'var(--ivory)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--gold-600)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 24,
    color: "currentColor"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '1.3rem',
      color: 'var(--charcoal)',
      margin: '18px 0 10px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--slate-ink)',
      fontSize: '14.5px',
      lineHeight: 1.6,
      margin: 0
    }
  }, d))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ivory)',
      padding: '0 var(--gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-text)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d2)',
      color: 'var(--charcoal)',
      letterSpacing: '-0.02em'
    }
  }, "Not sure if we reach you?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--slate-ink)',
      fontSize: 'var(--fs-lg)',
      margin: '16px auto 30px',
      maxWidth: '46ch'
    }
  }, "Give us a call and we\u2019ll confirm availability in your area right away."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: pillSA,
    onClick: onBook
  }, "Book Your Drip"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+17138517590",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: pillSA,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 17,
      color: "currentColor"
    })
  }, "(713) 851-7590"))))));
}
window.ServiceArea = ServiceArea;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiceArea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/kit.jsx
try { (() => {
/* global React */
// Shared kit helpers: elegant image placeholder + section label + reveal wrapper.
const DS = window.RapidRefreshDesignSystem_646e39;

/**
 * Photo — renders a real image if `src` given, else an elegant matte placeholder
 * (never a dashed box). Placeholder shows a faint droplet + a small gold caption.
 */
function Photo({
  src,
  alt = '',
  caption = 'Pictorial',
  ratio = '4 / 3',
  radius = 'var(--radius-xl)',
  style = {}
}) {
  const box = {
    position: 'relative',
    width: '100%',
    aspectRatio: ratio,
    borderRadius: radius,
    overflow: 'hidden',
    background: 'var(--navy-500)',
    ...style
  };
  if (src) {
    return /*#__PURE__*/React.createElement("div", {
      style: box
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: alt,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...box,
      border: '1px solid var(--navy-300)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.14
    }
  }, /*#__PURE__*/React.createElement(DS.Icon, {
    name: "droplet",
    size: 120,
    color: "var(--gold-300)",
    strokeWidth: 1
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 16,
      left: 18,
      fontFamily: 'var(--font-text)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--gold-300)'
    }
  }, caption));
}

/** Reveal — gentle fade+rise on scroll into view (spa-calm, no bounce). */
function Reveal({
  children,
  delay = 0,
  style = {}
}) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(es => {
      es.forEach(e => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      });
    }, {
      threshold: 0.12
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : 'translateY(22px)',
      transition: `opacity var(--dur-reveal) var(--ease-out) ${delay}ms, transform var(--dur-reveal) var(--ease-out) ${delay}ms`,
      ...style
    }
  }, children);
}

/**
 * Collage — the brand's editorial two-column arrangement (medvi-inspired):
 * LEFT = a tinted panel holding one large image, with a titled gold checklist
 * beneath it. RIGHT = eyebrow + accent-word headline, a pair of tall images,
 * then a subhead, body, and CTA. `flip` mirrors the columns.
 */
function Collage({
  eyebrow,
  accentWord,
  headlineRest,
  mainCaption = 'Pictorial',
  captionA = 'Lifestyle',
  captionB = 'Detail',
  mainSrc,
  aSrc,
  bSrc,
  checklistTitle,
  checklist = [],
  subhead,
  body,
  ctaLabel,
  onCta,
  bg = 'var(--ivory)',
  tint = 'var(--gold-a16)',
  flip = false
}) {
  const {
    SectionLabel,
    Button,
    Icon
  } = DS;
  const pill = {
    borderRadius: 'var(--radius-pill)'
  };
  const left = /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: tint,
      borderRadius: 'var(--radius-xl)',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    src: mainSrc,
    caption: mainCaption,
    ratio: "4 / 3",
    radius: "var(--radius-lg)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '1.375rem',
      color: 'var(--charcoal)',
      margin: '0 0 18px',
      letterSpacing: '-0.01em'
    }
  }, checklistTitle), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 13
    }
  }, checklist.map(item => /*#__PURE__*/React.createElement("li", {
    key: item,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      flex: '0 0 auto',
      borderRadius: '50%',
      background: 'var(--gold-a16)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--gold-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    color: "currentColor"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '15px',
      color: 'var(--slate-ink)'
    }
  }, item))))));
  const right = /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "onLight"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-d1)',
      color: 'var(--charcoal)',
      letterSpacing: '-0.02em',
      margin: '18px 0 0',
      lineHeight: 1.08
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)'
    }
  }, accentWord), " ", headlineRest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18,
      margin: '30px 0 0'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    src: aSrc,
    caption: captionA,
    ratio: "3 / 4",
    radius: "var(--radius-lg)"
  }), /*#__PURE__*/React.createElement(Photo, {
    src: bSrc,
    caption: captionB,
    ratio: "3 / 4",
    radius: "var(--radius-lg)",
    style: {
      marginTop: 34
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--fs-d3)',
      color: 'var(--charcoal)',
      letterSpacing: '-0.01em',
      margin: '34px 0 0'
    }
  }, subhead), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--slate-ink)',
      fontSize: '16px',
      lineHeight: 1.7,
      margin: '14px 0 0',
      maxWidth: '46ch'
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: pill,
    onClick: onCta
  }, ctaLabel)));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '0.95fr 1.05fr',
      gap: 'clamp(32px,5vw,72px)',
      alignItems: 'start'
    }
  }, flip ? [right, left].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, c)) : [left, right].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, c))));
}
Object.assign(window, {
  Photo,
  Reveal,
  Collage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/kit.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.BoosterRow = __ds_scope.BoosterRow;

__ds_ns.DripRow = __ds_scope.DripRow;

__ds_ns.MembershipCard = __ds_scope.MembershipCard;

})();
