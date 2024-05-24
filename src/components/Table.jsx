import React from "react";
// import { useBlog } from "../context/BlogContext";
import { useNavigate, Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAuthor } from "../api/Query";
import { Button } from "../components/ui/button";

function Table({ fullName, email, id , allAuthors, setAllAuthors}) {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const deleteAuthorMutation = useMutation({
    mutationFn: deleteAuthor,
    onSuccess: () => {
      console.log("deleted Successfully");
      queryClient.invalidateQueries(["authors"]);
      navigate('/authors')
      
    },
  });

  const handleDeleteAuthor = (id) => {
    deleteAuthorMutation.mutate(id);
    const filtered =  allAuthors.filter((author)=> author._id != id)
    setAllAuthors(filtered)
  };

  return (
    <tbody>
      <tr className="text-center border-b-2 ">
        <td className="font-medium ">
          <div className="flex  items-center gap-4 px-3">
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full "></div>
            <span className="font-medium text-gray-700 hover:underline hover:underline-offset-4">
              <Link to={`/author-detail/${id}`}>{fullName}</Link>
            </span>
          </div>
        </td>

        <td>{email}</td>
        <td className="text-right px-4 py-4">
          <div className="flex items-center justify-end gap-4">
            <Button>
              <Link to={`/authors/edit-author/${id}`}> Edit</Link>
            </Button>
            <Button
              onClick={() => {
                handleDeleteAuthor(id);
              }}
              variant="destructive"
            >
              Delete
            </Button>
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default Table;
