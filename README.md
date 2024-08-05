## RAG Project for Ward and Stake Clerks
This project uses Retrieval-Augmented Generation (RAG) to answer questions posed by ward and stake clerks of The Church of Jesus Christ of Latter-day Saints. The data is sourced from the General Handbook of Instructions of the Church (https://www.churchofjesuschrist.org/study/manual/general-handbook?lang=eng). The project leverages the LlamaIndex framework.

### Features
- Accurate retrieval of information from the General Handbook
- Generative responses using advanced language models
- User-friendly query interface

### Prerequisites
- Python 3.11+
- Poetry

### Steps

#### 1. Clone the repository:

```python
git clone https://github.com/yourusername/rag-lds-clerks.git
cd rag-lds-clerks
```

#### 2. Install dependencies using Poetry:

```python
poetry install
```

#### 3. Activate the virtual environment:

```python
poetry shell
```


### Getting Started

First, startup the backend as described in the [backend README](./backend/README.md).

Second, run the development server of the frontend as described in the [frontend README](./frontend/README.md).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
