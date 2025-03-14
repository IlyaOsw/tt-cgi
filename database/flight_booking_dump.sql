--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

-- Started on 2025-03-13 13:43:24

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 24648)
-- Name: flights; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.flights (
    id integer NOT NULL,
    departure_location character varying(255) NOT NULL,
    departure_datetime character varying(255) NOT NULL,
    arrival_location character varying(255) NOT NULL,
    arrival_datetime timestamp(6) without time zone NOT NULL,
    price integer NOT NULL,
    duration integer NOT NULL
);


ALTER TABLE public.flights OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 24647)
-- Name: flights_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.flights_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.flights_id_seq OWNER TO postgres;

--
-- TOC entry 4807 (class 0 OID 0)
-- Dependencies: 217
-- Name: flights_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.flights_id_seq OWNED BY public.flights.id;


--
-- TOC entry 220 (class 1259 OID 24736)
-- Name: seats; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.seats (
    id integer NOT NULL,
    flight_id integer NOT NULL,
    seat_id character varying(255) NOT NULL,
    is_available boolean NOT NULL
);


ALTER TABLE public.seats OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 24735)
-- Name: seats_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.seats_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.seats_id_seq OWNER TO postgres;

--
-- TOC entry 4808 (class 0 OID 0)
-- Dependencies: 219
-- Name: seats_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.seats_id_seq OWNED BY public.seats.id;


--
-- TOC entry 4646 (class 2604 OID 24651)
-- Name: flights id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flights ALTER COLUMN id SET DEFAULT nextval('public.flights_id_seq'::regclass);


--
-- TOC entry 4647 (class 2604 OID 24739)
-- Name: seats id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seats ALTER COLUMN id SET DEFAULT nextval('public.seats_id_seq'::regclass);


--
-- TOC entry 4799 (class 0 OID 24648)
-- Dependencies: 218
-- Data for Name: flights; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.flights (id, departure_location, departure_datetime, arrival_location, arrival_datetime, price, duration) FROM stdin;
1	Tallinn	2025-03-02 13:00:00	Stockholm	2025-03-02 14:30:00	100	90
2	Tallinn	2025-03-03 09:00:00	Helsinki	2025-03-03 09:40:00	70	40
3	Tallinn	2025-03-04 15:30:00	London	2025-03-04 18:15:00	130	165
4	Tallinn	2025-03-06 18:00:00	Paris	2025-03-06 20:30:00	200	150
5	Tallinn	2025-03-05 07:00:00	Berlin	2025-03-05 08:45:00	110	105
\.


--
-- TOC entry 4801 (class 0 OID 24736)
-- Dependencies: 220
-- Data for Name: seats; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.seats (id, flight_id, seat_id, is_available) FROM stdin;
1	1	1A	f
2	1	1B	t
3	1	1C	f
4	1	1D	t
5	1	1E	t
6	1	1F	f
7	1	2A	t
8	1	2B	f
9	1	2C	t
10	1	2D	f
11	1	2E	f
12	1	2F	t
13	1	3A	t
14	1	3B	t
15	1	3C	f
16	1	3D	f
17	1	3E	t
18	1	3F	f
19	1	4A	f
20	1	4B	t
21	1	4C	f
22	1	4D	t
23	1	4E	t
24	1	4F	f
25	1	5A	t
26	1	5B	f
27	1	5C	t
28	1	5D	f
29	1	5E	f
30	1	5F	t
31	1	6A	t
32	1	6B	f
33	1	6C	t
34	1	6D	f
35	1	6E	t
36	1	6F	f
37	2	1A	t
38	2	1B	f
39	2	1C	t
40	2	1D	f
41	2	1E	f
42	2	1F	t
43	2	2A	f
44	2	2B	t
45	2	2C	f
46	2	2D	t
47	2	2E	t
48	2	2F	f
49	2	3A	t
50	2	3B	f
51	2	3C	t
52	2	3D	f
53	2	3E	f
54	2	3F	t
55	2	4A	f
56	2	4B	t
57	2	4C	f
58	2	4D	t
59	2	4E	t
60	2	4F	f
61	2	5A	t
62	2	5B	f
63	2	5C	t
64	2	5D	f
65	2	5E	f
66	2	5F	t
67	2	6A	t
68	2	6B	f
69	2	6C	t
70	2	6D	f
71	2	6E	f
72	2	6F	t
73	3	1A	f
74	3	1B	t
75	3	1C	t
76	3	1D	f
77	3	1E	f
78	3	1F	t
79	3	2A	f
80	3	2B	t
81	3	2C	f
82	3	2D	t
83	3	2E	t
84	3	2F	f
85	3	3A	t
86	3	3B	f
87	3	3C	t
88	3	3D	f
89	3	3E	f
90	3	3F	t
91	3	4A	f
92	3	4B	t
93	3	4C	f
94	3	4D	t
95	3	4E	t
96	3	4F	f
97	3	5A	t
98	3	5B	f
99	3	5C	t
100	3	5D	f
101	3	5E	f
102	3	5F	t
103	3	6A	t
104	3	6B	f
105	3	6C	t
106	3	6D	f
107	3	6E	t
108	3	6F	f
109	4	1A	f
110	4	1B	t
111	4	1C	t
112	4	1D	f
113	4	1E	f
114	4	1F	t
115	4	2A	t
116	4	2B	f
117	4	2C	t
118	4	2D	f
119	4	2E	f
120	4	2F	t
121	4	3A	f
122	4	3B	t
123	4	3C	f
124	4	3D	t
125	4	3E	t
126	4	3F	f
127	4	4A	t
128	4	4B	f
129	4	4C	t
130	4	4D	f
131	4	4E	f
132	4	4F	t
133	4	5A	f
134	4	5B	t
135	4	5C	f
136	4	5D	t
137	4	5E	t
138	4	5F	f
139	4	6A	t
140	4	6B	f
141	4	6C	t
142	4	6D	f
143	4	6E	t
144	4	6F	f
145	5	1A	t
146	5	1B	f
147	5	1C	t
148	5	1D	f
149	5	1E	f
150	5	1F	t
151	5	2A	f
152	5	2B	t
153	5	2C	f
154	5	2D	t
155	5	2E	t
156	5	2F	f
157	5	3A	t
158	5	3B	f
159	5	3C	t
160	5	3D	f
161	5	3E	f
162	5	3F	t
163	5	4A	f
164	5	4B	t
165	5	4C	f
166	5	4D	t
167	5	4E	t
168	5	4F	f
169	5	5A	t
170	5	5B	f
171	5	5C	t
172	5	5D	f
173	5	5E	f
174	5	5F	t
175	5	6A	f
176	5	6B	t
177	5	6C	f
178	5	6D	t
179	5	6E	t
180	5	6F	f
\.


--
-- TOC entry 4809 (class 0 OID 0)
-- Dependencies: 217
-- Name: flights_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.flights_id_seq', 5, true);


--
-- TOC entry 4810 (class 0 OID 0)
-- Dependencies: 219
-- Name: seats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seats_id_seq', 180, true);


--
-- TOC entry 4649 (class 2606 OID 24653)
-- Name: flights flights_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flights
    ADD CONSTRAINT flights_pkey PRIMARY KEY (id);


--
-- TOC entry 4651 (class 2606 OID 24741)
-- Name: seats seats_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seats
    ADD CONSTRAINT seats_pkey PRIMARY KEY (id);


--
-- TOC entry 4652 (class 2606 OID 24742)
-- Name: seats seats_flight_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.seats
    ADD CONSTRAINT seats_flight_id_fkey FOREIGN KEY (flight_id) REFERENCES public.flights(id) ON DELETE CASCADE;


-- Completed on 2025-03-13 13:43:27

--
-- PostgreSQL database dump complete
--

