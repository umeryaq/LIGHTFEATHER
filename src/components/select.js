import React from "react";
import { Form } from "../index";

function Select({
  value,
  handleChange,
  label,
  handleBlur,
  data,
  errors,
  touched,
}) {
  return (
    <div>
      <Form>
        <Form.Group>
          <div className="label">
            <Form.Label className="">{label}</Form.Label>
          </div>

          <div className="control">
            <Form.Select
              aria-label="Default select example"
              name="select"
              value={value}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Select... </option>

              {data.map((item) => (
                <option key={item.id} value={item.firstName}>
                  {item.firstName}
                </option>
              ))}
            </Form.Select>
            {errors && touched ? <p className="error"> {errors}</p> : null}
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Select;
