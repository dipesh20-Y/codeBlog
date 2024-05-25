import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { format } from "date-fns";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComment, updateExistingComment } from "@/api/Query";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Pencil, Check, X } from "lucide-react";
import Input from "./Input";
import { useForm } from "react-hook-form";

function Comments({
  name,
  comment,
  id,
  date,
  blogId,
  allComments,
  setAllComments,
}) {
  const { toast } = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit } = useForm();

  const deleteCommentMutation = useMutation({
    mutationFn: () => deleteComment(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["comments"]);
      console.log(blogId);
    },
  });
  const handleDeleteComment = (id) => {
    deleteCommentMutation.mutate(id);
    const filter = allComments.filter((comment) => comment._id != id);
    setAllComments(filter);

    navigate(`/detail/${blogId}`);
  };

  const updateCommentMutation = useMutation({
    mutationFn: updateExistingComment,
    onSuccess:()=>{
      console.log("Comment updated successfully!!")
      queryClient.invalidateQueries(['comments'])
      
    }
  })
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditCancle = () => {
    setIsEditing(false);
  };

  const handleUpdateComment = (data) => {
   
    updateCommentMutation.mutate({id, blogId, name, ...data})
    navigate(`/detail/${blogId}`)
    setIsEditing(false)
  };

  return (
    <div className="flex items-start gap-4 mt-8 border px-3 py-4 shadow-md bg-stone-50">
      <Avatar>
        <AvatarImage alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="font-medium text-gray-500">{name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {format(new Date(date), "yyyy-MM-dd")}
          </div>
        </div>
        <div>
          {isEditing ? (
            <div>
              <form onSubmit={handleSubmit(handleUpdateComment)}>
                <Input
                  {...register("comment", {
                    required: true,
                  })}
                  defaultValue={comment}
                  type="textarea"
                />
                <div className="flex justify-end space-x-4">
                  <Button>
                    <Check />
                  </Button>
                  <Button onClick={handleEditCancle} variant="destructive">
                    <X />
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div>
              <p className="mt-2">{comment}</p>
              <div className="flex justify-end space-x-4">
                <Button onClick={handleEditClick}>
                  <Pencil />
                </Button>
                <Button
                  onClick={() => handleDeleteComment(id)}
                  variant="destructive"
                >
                  <Trash2 />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Comments;
