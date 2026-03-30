import { useNavigate } from 'react-router-dom';

const Secudal = () => {
  const navigate = useNavigate();

  return (
    <div className=" text-white text-center p-5 rounded shadow-lg" style={{backgroundColor:'#65CAF1'}}>
      <h2 className="mb-4" style={{ fontWeight: 'bold', fontSize: '28px' }}>
        Stay Updated with Healthcare Billing Insights
      </h2>
      <p className="mb-4" style={{ fontSize: '18px', lineHeight: '1.6' }}>
        Get the latest updates on medical billing regulations, industry best practices, and revenue optimization strategies delivered to your inbox.
      </p>
      <div className="d-inline-flex align-items-center" style={{ gap: '10px' }}>
        <input
          type="email"
          placeholder="Enter your email address"
          className="form-control"
          style={{ maxWidth: '300px', height: '45px', border: '2px solid #007BFF', borderRadius: '5px' }}
        />
        <button
          className="btn btn-primary"
          style={{ height: '45px', padding: '0 40px', background: '#61C981', border: 'none', borderRadius: '5px' }}
          onClick={() => navigate('/contact')}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Secudal;