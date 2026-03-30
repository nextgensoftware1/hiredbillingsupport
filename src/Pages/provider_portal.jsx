import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";


const ProviderPortal = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    npi: "",
    practice: "",
    specialty: "",
    state: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [isSignIn, setIsSignIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signInForm, setSignInForm] = useState({ email: '', password: '' });
  const [signInErrors, setSignInErrors] = useState({});


  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";
    if (!form.email.match(/^\S+@\S+\.\S+$/)) e.email = "Enter a valid email";
    if (!form.phone.match(/^[0-9\-()+\s]{7,20}$/)) e.phone = "Enter a valid phone";
    if (!form.npi.trim()) e.npi = "NPI is required";
    if (!form.practice.trim()) e.practice = "Practice name is required";
    // Specialty and state are optional now (not required)
    if (form.password.length < 8) e.password = "Password must be 8+ characters";
    if (form.password !== form.confirmPassword) e.confirmPassword = "Passwords do not match";
    if (!form.terms) e.terms = "You must agree to terms";
    return e;
  };

  const handleChange = (field) => (evt) => {
    const raw = field === "terms" ? evt.target.checked : evt.target.value;
    const value = typeof raw === 'string' ? raw.trimStart() : raw; // avoid trimming mid-typing start
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setLoading(true);
      // Simulate API call — replace with real endpoint
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 1200);
    }
  };
  const handleSignInChange = (field) => (evt) => {
    setSignInForm(prev => ({ ...prev, [field]: evt.target.value }));
  };

  const handleSignIn = (evt) => {
    evt.preventDefault();
    const e = {};
    if (!signInForm.email.match(/^\S+@\S+\.\S+$/)) e.email = 'Enter a valid email';
    if (!signInForm.password) e.password = 'Enter your password';
    setSignInErrors(e);
    if (Object.keys(e).length === 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        // For now, simulate success by redirecting to homepage or showing a simple alert
        setSubmitted(true);
      }, 900);
    }
  };

  const toggleMode = () => {
    setIsSignIn(v => !v);
    setErrors({});
    setSignInErrors({});
  };

  const passwordStrength = (pw) => {
    if (!pw) return { label: '', color: '' };
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    if (score <= 1) return { label: 'Weak', color: '#ef4444' };
    if (score === 2) return { label: 'Fair', color: '#f59e0b' };
    if (score === 3) return { label: 'Good', color: '#10b981' };
    return { label: 'Strong', color: '#059669' };
  };

  if (submitted) {
    return (
      <section className="bg-white" style={{ paddingTop: "140px", paddingBottom: "100px" }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={10}>
              <div className="p-5 shadow-lg rounded-4 text-center">
                <h2 className="fw-bold mb-3" style={{ color: "#0b155b" }}>Registration Submitted</h2>
                <p className="mb-4">Thanks — we've received your provider registration request. Check your email for verification and next steps.</p>
                <Button href="/" variant="outline-primary">Return to site</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-white" style={{ paddingTop: "140px", paddingBottom: "100px" }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <div className="p-5 shadow-lg rounded-4" style={{ backgroundColor: "#ffffff", border: "1px solid #e8e8e8" }}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="fw-bold mb-0" style={{ color: "#0b155b", fontSize: "1.6rem" }}>{isSignIn ? 'Provider Portal — Sign In' : 'Provider Portal — Sign Up'}</h2>
              {/* top toggle removed - placed below submit for better UX */}
              </div>

              <p className="text-center text-muted mb-3" style={{ fontSize: "0.95rem" }}>
                {isSignIn ? 'Sign in to access claims, billing tools, and secure messaging.' : 'Create your provider account to access claims, billing tools, and secure messaging.'}
              </p>

              {isSignIn ? (
                <Form onSubmit={handleSignIn} noValidate aria-live="polite">
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={signInForm.email} onChange={handleSignInChange('email')} placeholder="Email address" autoFocus />
                    {signInErrors.email && <div className="text-danger mt-1">{signInErrors.email}</div>}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <div className="d-flex">
                      <Form.Control type="password" value={signInForm.password} onChange={handleSignInChange('password')} placeholder="Password" />
                    </div>
                    {signInErrors.password && <div className="text-danger mt-1">{signInErrors.password}</div>}
                  </Form.Group>
                  <div className="d-grid">
                    <Button type="submit" disabled={loading} className="text-white fw-semibold rounded-pill py-3" style={{ background: "linear-gradient(90deg, #00b14f 0%, #0cc4d9 100%)", border: 'none' }}>
                      {loading && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>}Sign In
                    </Button>
                  </div>
                  <div className="text-center mt-3">
                    <small><a href="#" onClick={e => { e.preventDefault(); toggleMode(); }}>Don't have an account? Sign up</a></small>
                  </div>
                </Form>
              ) : (
                <Form onSubmit={handleSubmit} noValidate aria-live="polite">
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>First name</Form.Label>
                    <Form.Control value={form.firstName} onChange={handleChange('firstName')} placeholder="First name" />
                    {errors.firstName && <div className="text-danger mt-1">{errors.firstName}</div>}
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control value={form.lastName} onChange={handleChange('lastName')} placeholder="Last name" />
                    {errors.lastName && <div className="text-danger mt-1">{errors.lastName}</div>}
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={form.email} onChange={handleChange('email')} placeholder="Email address" />
                    {errors.email && <div className="text-danger mt-1">{errors.email}</div>}
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control value={form.phone} onChange={handleChange('phone')} placeholder="Phone number" />
                    {errors.phone && <div className="text-danger mt-1">{errors.phone}</div>}
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>NPI Number</Form.Label>
                    <Form.Control value={form.npi} onChange={handleChange('npi')} placeholder="NPI" />
                    {errors.npi && <div className="text-danger mt-1">{errors.npi}</div>}
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label>Practice / Organization</Form.Label>
                    <Form.Control value={form.practice} onChange={handleChange('practice')} placeholder="Practice name" />
                    {errors.practice && <div className="text-danger mt-1">{errors.practice}</div>}
                  </Col>
                </Row>

           

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <div className="d-flex">
                      <Form.Control type="password" value={form.password} onChange={handleChange('password')} placeholder="Create a password" aria-describedby="passwordHelp" />
                    </div>
                    {errors.password && <div className="text-danger mt-1">{errors.password}</div>}
                    {!errors.password && form.password && (
                      (() => { const s = passwordStrength(form.password); return <div id="passwordHelp" style={{ marginTop: 8 }}><small style={{ color: s.color }}>{s.label}</small></div>; })()
                    )}
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label>Confirm password</Form.Label>
                    <div className="d-flex">
                      <Form.Control type="password" value={form.confirmPassword} onChange={handleChange('confirmPassword')} placeholder="Confirm password" />
                    </div>
                    {errors.confirmPassword && <div className="text-danger mt-1">{errors.confirmPassword}</div>}
                  </Col>
                </Row>

                <Form.Group className="mb-4" controlId="formTerms">
                  <Form.Check type="checkbox" label={"I agree to the provider terms and privacy policy"} checked={form.terms} onChange={handleChange('terms')} />
                  {errors.terms && <div className="text-danger mt-1">{errors.terms}</div>}
                </Form.Group>

                <div className="d-grid">
                  <Button type="submit" disabled={loading} className="text-white fw-semibold rounded-pill py-3" style={{ background: "linear-gradient(90deg, #00b14f 0%, #0cc4d9 100%)", border: 'none' }}>
                    {loading && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>}Create Account
                  </Button>
                </div>
                <div className="text-center mt-3">
                  <small><a href="#" onClick={e => { e.preventDefault(); toggleMode(); }}>Have an account? Sign in</a></small>
                </div>
              </Form>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProviderPortal;
