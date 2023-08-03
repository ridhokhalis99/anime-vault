import { render, act, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AnimeProvider, useAnimeContext } from "../contexts/animeContext";
import { AnimeItem, Collection } from "../types";

describe("AnimeContext", () => {
  test("addToStashBox should add an anime to stashBox", () => {
    let stashBox: AnimeItem[] = [];
    let addToStashBox: (anime: AnimeItem) => void = () => {};

    function TestComponent() {
      const { stashBox: stashBoxContext, addToStashBox: addToStashBoxContext } =
        useAnimeContext();
      stashBox = stashBoxContext;
      addToStashBox = addToStashBoxContext;

      return (
        <div>
          <button
            onClick={() =>
              addToStashBox({
                id: 1,
                title: { romaji: "Test Anime" },
                status: "status",
                description: "description",
                averageScore: 0,
                genres: ["genre"],
                type: "type",
                coverImage: { large: "image-url" },
              })
            }
          >
            Add to Stash
          </button>
        </div>
      );
    }

    render(
      <AnimeProvider>
        <TestComponent />
      </AnimeProvider>
    );

    const addButton = screen.getByText("Add to Stash");
    expect(stashBox).toHaveLength(0);

    act(() => {
      fireEvent.click(addButton);
    });

    expect(stashBox).toHaveLength(1);
    expect(stashBox[0].title.romaji).toBe("Test Anime");
  });

  test("removeFromStashBox should remove an anime from stashBox", () => {
    let stashBox: AnimeItem[] = [
      {
        id: 1,
        title: { romaji: "Test Anime" },
        status: "status",
        description: "description",
        averageScore: 0,
        genres: ["genre"],
        type: "type",
        coverImage: { large: "image-url" },
      },
    ];
    let removeFromStashBox: (anime: AnimeItem) => void = () => {};

    function TestComponent() {
      const {
        stashBox: stashBoxContext,
        removeFromStashBox: removeFromStashBoxContext,
      } = useAnimeContext();
      stashBox = stashBoxContext;
      removeFromStashBox = removeFromStashBoxContext;

      return (
        <div>
          <button
            onClick={() =>
              removeFromStashBox({
                id: 1,
                title: { romaji: "Test Anime" },
                status: "status",
                description: "description",
                averageScore: 0,
                genres: ["genre"],
                type: "type",
                coverImage: { large: "image-url" },
              })
            }
          >
            Remove from Stash
          </button>
        </div>
      );
    }

    render(
      <AnimeProvider>
        <TestComponent />
      </AnimeProvider>
    );

    const removeButton = screen.getByText("Remove from Stash");
    expect(stashBox).toHaveLength(1);

    act(() => {
      fireEvent.click(removeButton);
    });

    expect(stashBox).toHaveLength(0);
  });

  test("checkInStashBox should return true if an anime exists in stashBox", () => {
    let checkInStashBox: (anime: AnimeItem) => boolean = () => false;

    function TestComponent() {
      const { checkInStashBox: checkInStashBoxContext, addToStashBox } =
        useAnimeContext();
      checkInStashBox = checkInStashBoxContext;

      return (
        <div>
          <button
            onClick={() =>
              addToStashBox({
                id: 1,
                title: { romaji: "Test Anime" },
                status: "status",
                description: "description",
                averageScore: 0,
                genres: ["genre"],
                type: "type",
                coverImage: { large: "image-url" },
              })
            }
          >
            Add to Stash
          </button>
        </div>
      );
    }

    render(
      <AnimeProvider>
        <TestComponent />
      </AnimeProvider>
    );

    expect(
      checkInStashBox({
        id: 1,
        title: { romaji: "Test Anime" },
        status: "status",
        description: "description",
        averageScore: 0,
        genres: ["genre"],
        type: "type",
        coverImage: { large: "image-url" },
      })
    ).toBe(false);

    act(() => {
      fireEvent.click(screen.getByText("Add to Stash"));
    });

    expect(
      checkInStashBox({
        id: 1,
        title: { romaji: "Test Anime" },
        status: "status",
        description: "description",
        averageScore: 0,
        genres: ["genre"],
        type: "type",
        coverImage: { large: "image-url" },
      })
    ).toBe(true);
  });

  test("addCollection should add a new collection", () => {
    let collections: Collection[] = [];
    let addCollection: (collectionName: string) => void = () => {};

    function TestComponent() {
      const {
        collections: collectionsContext,
        addCollection: addCollectionContext,
      } = useAnimeContext();
      collections = collectionsContext;
      addCollection = addCollectionContext;

      return (
        <div>
          <button onClick={() => addCollection("New Collection")}>
            Add Collection
          </button>
        </div>
      );
    }

    render(
      <AnimeProvider>
        <TestComponent />
      </AnimeProvider>
    );

    const addButton = screen.getByText("Add Collection");
    expect(collections).toHaveLength(0);

    act(() => {
      fireEvent.click(addButton);
    });

    expect(collections).toHaveLength(1);
    expect(collections[0].title).toBe("New Collection");
  });

  test("deleteCollection should delete a collection", async () => {
    let collections: Collection[] = [];
    let deleteCollection: (collectionId: number) => void = () => {};

    function TestComponent() {
      const {
        collections: collectionsContext,
        deleteCollection: deleteCollectionContext,
        addCollection,
      } = useAnimeContext();
      collections = collectionsContext;
      deleteCollection = deleteCollectionContext;

      return (
        <div>
          <button onClick={() => addCollection("Test Collection")}>
            Add Collection
          </button>
          <button onClick={() => deleteCollection(collections[0]?.id)}>
            Delete Collection
          </button>
        </div>
      );
    }

    render(
      <AnimeProvider>
        <TestComponent />
      </AnimeProvider>
    );

    const deleteButton = screen.getByText("Delete Collection");

    expect(collections).toHaveLength(1);

    act(() => {
      fireEvent.click(deleteButton);
    });

    expect(collections).toHaveLength(0);
  });

  test("removeAnimeFromCollection should remove an anime from a collection", () => {
    let collections: Collection[] = [];
    let removeAnimeFromCollection: (
      collectionId: number,
      animeId: number
    ) => void = () => {};

    function TestComponent() {
      const {
        collections: collectionsContext,
        removeAnimeFromCollection: removeAnimeFromCollectionContext,
        addCollection,
        addToCollection,
      } = useAnimeContext();
      collections = collectionsContext;
      removeAnimeFromCollection = removeAnimeFromCollectionContext;

      return (
        <div>
          <button onClick={() => addCollection("Test Collection")}>
            Add Collection
          </button>
          <button
            onClick={() =>
              addToCollection(collections[0]?.id, [
                {
                  id: 1,
                  title: { romaji: "Test Anime 1" },
                  status: "status",
                  description: "description",
                  averageScore: 0,
                  genres: ["genre"],
                  type: "type",
                  coverImage: { large: "image-url" },
                },
                {
                  id: 2,
                  title: { romaji: "Test Anime 2" },
                  status: "status",
                  description: "description",
                  averageScore: 0,
                  genres: ["genre"],
                  type: "type",
                  coverImage: { large: "image-url" },
                },
              ])
            }
          >
            Add Anime to Collection
          </button>
          <button
            onClick={() => removeAnimeFromCollection(collections[0]?.id, 1)}
          >
            Remove Anime from Collection
          </button>
        </div>
      );
    }

    render(
      <AnimeProvider>
        <TestComponent />
      </AnimeProvider>
    );

    const addButton = screen.getByText("Add Collection");
    const addAnimeButton = screen.getByText("Add Anime to Collection");
    const removeAnimeButton = screen.getByText("Remove Anime from Collection");

    expect(collections).toHaveLength(0);

    act(() => {
      fireEvent.click(addButton);
    });

    expect(collections).toHaveLength(1);

    act(() => {
      fireEvent.click(addAnimeButton);
    });

    expect(collections[0].animes).toHaveLength(2);

    act(() => {
      fireEvent.click(removeAnimeButton);
    });

    expect(collections[0].animes).toHaveLength(1);
  });

  test("updateCollection should update the title of a collection", () => {
    let collections: Collection[] = [];
    let updateCollection: (
      collectionId: number,
      newTitle: string
    ) => void = () => {};

    function TestComponent() {
      const {
        collections: collectionsContext,
        updateCollection: updateCollectionContext,
        addCollection,
      } = useAnimeContext();
      collections = collectionsContext;
      updateCollection = updateCollectionContext;

      return (
        <div>
          <button onClick={() => addCollection("Test Collection")}>
            Add Collection
          </button>
          <button
            onClick={() => updateCollection(collections[0]?.id, "New Title")}
          >
            Update Collection Title
          </button>
        </div>
      );
    }

    render(
      <AnimeProvider>
        <TestComponent />
      </AnimeProvider>
    );

    const updateButton = screen.getByText("Update Collection Title");

    expect(collections).toHaveLength(1);
    expect(collections[0].title).toBe("Test Collection");

    act(() => {
      fireEvent.click(updateButton);
    });

    expect(collections[0].title).toBe("New Title");
  });

  it("getCollectionById returns the correct collection", () => {
    let collections: Collection[] = [];
    let getCollectionById: (
      collectionId: number
    ) => Collection | undefined = () => undefined;

    function TestComponent() {
      const {
        collections: collectionsContext,
        getCollectionById: getCollectionByIdContext,
        addCollection: addCollectionContext,
      } = useAnimeContext();
      collections = collectionsContext;
      getCollectionById = getCollectionByIdContext;

      return null;
    }

    render(
      <AnimeProvider>
        <TestComponent />
      </AnimeProvider>
    );

    expect(collections).toHaveLength(1);

    const collectionId = collections[0]?.id;

    expect(getCollectionById(collectionId)).toBe(collections[0]);
  });
});
