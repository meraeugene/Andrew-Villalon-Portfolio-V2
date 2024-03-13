import Section from "../components/Section";
import Heading from "../components/Heading";
import { useState } from "react";
import {
  FormControl,
  Input,
  FormErrorMessage,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const initValues = { name: "", email: "", message: "" };
const initState = { values: initValues };

const Contact = () => {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const { values } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // const res = await axios.post("http://localhost:3000/send-email", values);
      const res = await axios.post(
        "https://andrew-villalon-portfolio-version-2-api.vercel.app/send-email",
        values
      );
      const { data } = res;
      setTouched({});
      setState(initState);
      toast({
        title: data.message,
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Message Failed to Send.",
        status: "error",
        duration: 2000,
        position: "top",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact">
      <div className="container">
        <Heading
          title="Contact"
          text="My contact portfolio is always open for inquiries and potential job opportunities. If you are interested in discussing potential collaborations or hiring me, please don't hesitate to reach out. I look forward to engaging in a fruitful conversation with you!"
        />

        <form
          className="flex  max-w-[500px] mx-auto flex-col gap-4"
          onSubmit={onSubmitHandler}
        >
          <FormControl isRequired isInvalid={touched.name && !values.name}>
            <Input
              type="text"
              placeholder="Name"
              name="name"
              required
              errorBorderColor="red.500"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
              className="w-full p-3  mt-1 text-base text-white rounded-sm"
              id="name"
              borderColor="blue.500"
            />
            <FormErrorMessage>Name Required</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={touched.email && !values.email}>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              required
              value={values.email}
              errorBorderColor="crimson"
              onChange={handleChange}
              onBlur={onBlur}
              className="w-full p-1 outline-none mt-1 text-base text-white rounded-sm"
              id="email"
              borderColor="blue.500"
            />
            <FormErrorMessage>Email Required</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={touched.message && !values.message}
          >
            <Textarea
              rows={7}
              placeholder="Message"
              name="message"
              required
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
              className="w-full p-1 outline-none mt-1 text-base text-white rounded-sm"
              id="message"
              borderColor="blue.500"
            ></Textarea>
            <FormErrorMessage>Message Required</FormErrorMessage>
          </FormControl>

          <Button
            type="submit"
            variant="outline"
            isDisabled={!values.name || !values.email || !values.message}
            color="#fff"
            _hover={false}
            className="w-full p-3 outline-none mt-1 text-base text-white rounded-sm"
            isLoading={loading}
            borderColor="blue.500"
          >
            Submit
          </Button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
